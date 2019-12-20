import {Module} from '@nestjs/common';
import { BlogModule } from './blog/BlogModule';
import { PostController } from './blog/PostController';

@Module({
    imports: [
        BlogModule
    ],
    controllers: [
    ],
    providers: [
    ],
})
export class AppModule {
}
