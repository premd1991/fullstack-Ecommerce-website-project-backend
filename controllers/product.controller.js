import sliderData from "../data/sliderData.js";


export async function handleCreateNewProduct (req, res){

}

export async function handleGetAllProducts (req, res){

}

export function handleGetMenProduct (req, res){
   res.json(menProducts);
}

export function handleGetWomenProduct (req, res){
   res.json(womenProducts);
}

export function handleGetKidsProduct (req, res){
   res.json(kidsProducts);

}

export function handleSliderProducts(req, res){
   res.status(200).json(sliderData);
}
