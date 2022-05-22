import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<(import("./product.model").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
