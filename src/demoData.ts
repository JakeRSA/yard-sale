type ItemStatus = 'available' | 'reserved' | 'sold'

export interface ItemImage {
    src: string;
    filename: string;
}

export interface SaleItem {
    title: string;
    description: string;
    dimensions: {x: number, y: number, z: number};
    price: number;
    status: ItemStatus;
    images: ItemImage[]
}

export const items: SaleItem[] = [
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
    {title: 'Fridge', description: 'this is our fridge', dimensions: {x: 60, y: 160, z: 70}, price: 800, status: 'available', images: [
        {src: 'https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg', filename: '1'}, {src: 'https://images.thdstatic.com/productImages/cc115637-8405-4a3a-b390-127951ccad8f/svn/stainless-look-magic-chef-mini-fridges-hmdr450se-64_1000.jpg', filename: '2'}
    ]},
    {title: 'Microwave', description: 'this is not a good microwave but it works', dimensions: {x: 60, y: 50, z: 40}, price: 100, status: 'reserved', images: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR1SCdcrU10xFRpA6ZEnTYRcX5509CGW7Un21R3npyHK0-CESDgWgSrMhiirAwezUC0c&usqp=CAU', filename: '3'}, {src: 'https://ychef.files.bbci.co.uk/976x549/p08kqzh7.jpg', filename: '4'}
    ]},
];