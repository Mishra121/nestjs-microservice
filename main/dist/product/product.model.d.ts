/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from "mongoose";
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: number;
    title: string;
    image: string;
    likes: string;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any>, {}, {}>;
