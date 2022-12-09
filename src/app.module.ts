import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { BookModule } from './book/book.module'

@Module({
  imports: [
    BookModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), '/src/schema.gql')
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
