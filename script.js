//constractor for finding beauty products
function findBeautyProducts(skinComplexion, skinType){
    this.skinComplexion = skinComplexion;
    this.skinType = skinType;

}

// object of beauty product for dark skin complexion


var darkSkinBeautyProducts = {
    
    beautyProductsDarkOily:  ["soothing serum", "iunik", "panoxyl", "coconut water cream"],
    beautyProductsDarkDry : ["pure aloe vera gel", "coconut oil", "triple cream", "eucerin", "borage"],
    beautyProductsDarkNormal : ["cetaphil", "olay", "cerave", "purity cleanser", "baby brown clarins"]

}

// object of beauty products for lightskin complexion

var lightSkinBeautyProducts = {
     
    beautyProductsLightOily : ["Covergirl Clean Fresh Pressed Powder", "Kate Somerville Oil-Free Moisturizer", "Caudalie Vinopure Natural Salicylic Acid Pore Minimizing Serum", "Dermalogica Oil Free Matte SPF30", "Mary Kay Oil Mattifier" ],
    beautyProductsLightDry : ["beautyProductsLightOily", "Aquaphor Healing Ointment", "CeraVe Moisturizing Cream", "Vanicream Moisturizing Skin Cream", "CeraVe Facial Moisturizing Lotion PM", "CeraVe SA Cream"],
    beautyProductsLightNormal : ["Stone Crop Gel Wash", " Lemon Cleanser", "Stone Crop Cleansing Oil"]

}
// object of location for darkskin

var locationForDarkSkinProduct = {

    beautyProductsDarkOilyLocation : ["kitengela", "nairobi", "thika"],
    beautyProductsDarkDryLocation : ["embakasi", "pipeline", "tasia"],
    beautyProductsDarkNormalLocation : ["allsops", "ruiru", "kenyatta road", "suvey"]
}

// object of location for lightskin

var locationForLightSkinProduct = {

    beautyProductsLightOilyLocation : ["juja", "roysambu"],
    beautyProductsLightOilyLocation : ["westlands", "cbd"],
    beautyProductsLightOilyLocation : ["ngog", "caren"]

}




