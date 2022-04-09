import { AuthenticationError } from 'apollo-server-core';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { mapSchema, MapperKind } from '@graphql-tools/utils';
import { UserRoles } from '@agrarspace/shared';

import { IContext } from '../types/graphqlContext';

const getArs = (directive: any, name: string): string | undefined => {
  if (!directive.arguments.length) return undefined;
  return directive.arguments?.find((value: any) => value.name.value === name)
    ?.value.value;
};

export const authDirective = (directiveName: string) => {
  return {
    userAuthDirectiveTypeDefs: `directive @${directiveName}(role: UserRoles = USER) on OBJECT | FIELD_DEFINITION`,
    userAuthDirectiveTransformer: (schema: GraphQLSchema) =>
      mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
          const directive = fieldConfig.astNode?.directives?.find(
            (value) => value.name.value === directiveName,
          );

          if (directive) {
            const { resolve = defaultFieldResolver } = fieldConfig;
            fieldConfig.resolve = (source, args, context: IContext, info) => {
              // user
              if (!context.user?.id)
                throw new AuthenticationError(
                  'Authentication Error!!! You dont have access to this resource',
                );

              // admin
              const role = getArs(directive, 'role');
              if (role && role === UserRoles.Admin && context.user.isAdmin)
                throw new AuthenticationError(
                  'Authentication Error!!! You dont have access to this resource',
                  {
                    requiredRole: UserRoles.Admin,
                  },
                );

              return resolve(source, args, context, info);
            };
            return fieldConfig;
          }
        },
      }),
  };
};
