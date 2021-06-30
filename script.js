//constractor for finding beauty products
function FindBeautyProducts(skinComplexion, skinType){
    this.skinComplexion = skinComplexion;
    this.skinType = skinType;

}

// prototype object of beauty product for dark skin complexion


FindBeautyProducts.prototype.darkSkinBeautyProducts = {
    
    beautyProductsDarkOily:  ["soothing serum", "iunik", "panoxyl", "coconut water cream"],
    beautyProductsDarkDry : ["pure aloe vera gel", "coconut oil", "triple cream", "eucerin", "borage"],
    beautyProductsDarkNormal : ["cetaphil", "olay", "cerave", "purity cleanser", "baby brown clarins"]

}

// prototype object of beauty products for lightskin complexion

FindBeautyProducts.prototype.lightSkinBeautyProducts = {
     
    beautyProductsLightOily : ["Covergirl Clean Fresh Pressed Powder", "Kate Somerville Oil-Free Moisturizer", "Caudalie Vinopure Natural Salicylic Acid Pore Minimizing Serum", "Dermalogica Oil Free Matte SPF30", "Mary Kay Oil Mattifier" ],
    beautyProductsLightDry : ["beautyProductsLightOily", "Aquaphor Healing Ointment", "CeraVe Moisturizing Cream", "Vanicream Moisturizing Skin Cream", "CeraVe Facial Moisturizing Lotion PM", "CeraVe SA Cream"],
    beautyProductsLightNormal : ["Stone Crop Gel Wash", " Lemon Cleanser", "Stone Crop Cleansing Oil"]

}
// prototype object of location for darkskin

FindBeautyProducts.prototype.locationForDarkSkinProduct = {

    beautyProductsDarkOilyLocation : ["beautyclick,parklands", "reones beauty and cosmetics supply,eastleigh", "skincare.co.ke,kileleshwa"],
    beautyProductsDarkDryLocation : ["beauty blog kenya,cbd", "radiant beauty world,nairobi", "suzie beauty,cbd"],
    beautyProductsDarkNormalLocation : ["le-fremms beauty salon,cbd", "lintons beauty", "beautine enterprises", "brivys beauty products and accessories"]
}

//  prototype object of location for lightskin

FindBeautyProducts.prototype.locationForLightSkinProduct = {

    beautyProductsLightOilyLocation : ["skincare co.ke ,cbd", "super cosmetics-adams arcade"],
    beautyProductsLightOilyLocation : ["peepy beauty products,nairobi city", "reones beauty and cosmetics supply,starehe"],
    beautyProductsLightOilyLocation : ["true cosmetics,mombasa", "markay products ,nairobi"]

}


$(document).ready(function(){

    $("beautyProducts").click(function(event) {

        event.preventDefault();

        const skinComplexion = $("#skin_complexion").val();
        const skinType = $("#skin_type").val();
        const email = $("#email").val();
    })
})




