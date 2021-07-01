//constractor for finding beauty products
function FindBeautyProducts(skinComplexion, skinType){
    this.skinComplexion = skinComplexion;
    this.skinType = skinType;

}

// prototype object of beauty product for dark skin complexion


FindBeautyProducts.prototype.darkSkinBeautyProducts = {
    
    oilySkin:  ["soothing serum", "iunik", "panoxyl", "coconut water cream"],
    drySkin : ["pure aloe vera gel", "coconut oil", "triple cream", "eucerin", "borage"],
    normalSkin : ["cetaphil", "olay", "cerave", "purity cleanser", "baby brown clarins"]

}

// prototype object of beauty products for lightskin complexion

FindBeautyProducts.prototype.lightSkinBeautyProducts = {
     
    oilySkin : ["Covergirl Clean Fresh Pressed Powder", "Kate Somerville Oil-Free Moisturizer", "Caudalie Vinopure Natural Salicylic Acid Pore Minimizing Serum", "Dermalogica Oil Free Matte SPF30", "Mary Kay Oil Mattifier" ],
    drySkin : ["beautyProductsLightOily", "Aquaphor Healing Ointment", "CeraVe Moisturizing Cream", "Vanicream Moisturizing Skin Cream", "CeraVe Facial Moisturizing Lotion PM", "CeraVe SA Cream"],
    normalSkin : ["Stone Crop Gel Wash", " Lemon Cleanser", "Stone Crop Cleansing Oil"]

}
// prototype object of location for darkskin

FindBeautyProducts.prototype.locationForDarkSkinProduct = {

    oilySkin : ["Beauty Click, Parklands, Nairobi", "Reones Beauty and Cosmetics Supply, Eastleigh, Nairobi", "Skincare, Kileleshwa, Nairobi"],
    drySkin : ["beauty blog kenya,cbd", "radiant beauty world,nairobi", "suzie beauty,cbd"],
    normalSkin : ["le-fremms beauty salon,cbd", "lintons beauty", "beautine enterprises", "brivys beauty products and accessories"]
}

//  prototype object of location for lightskin

FindBeautyProducts.prototype.locationForLightSkinProduct = {

    oilySkin : ["skincare co.ke ,cbd", "super cosmetics-adams arcade"],
    drySkin : ["peepy beauty products,nairobi city", "reones beauty and cosmetics supply,starehe"],
    normalSkin : ["true cosmetics,mombasa", "markay products ,nairobi"]

}


$(document).ready(function(){

    $("#beautyProducts").click(function(event) {

        event.preventDefault();

        const skinComplexion = $("#skin_complexion").val();
        const skinType = $("#skin_type").val();
        const email = $("#email").val();

        const findBeautyProducts = new FindBeautyProducts();

        $(".results").show();

        // DARK OILY SKIN

        if (skinComplexion == "dark" && skinType == "oily"){

            const results = `
                <h2>We suggest the following beauty products for <em>dark</em> skin complexion and <em>oily</em> skin type</h2>
                <br>
                <ul>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.oilySkin[0]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.oilySkin[1]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.oilySkin[2]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.oilySkin[3]}</li>
                </ul>
                <br>

                <h2>We suggest the following locations</h2>

                <br>

                <ul>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.oilySkin[0]}</li>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.oilySkin[1]}</li>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.oilySkin[2]}</li>
                    
                </ul>


            `
            $(".results").html(results)

        }


         // DARK DRY SKIN

         if (skinComplexion == "dark" && skinType == "dry"){

            const results = `
                <h2>We suggest the following beauty products for <em>dark</em> skin complexion and <em>dry</em> skin type</h2>
                <br>
                <ul>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.drySkin[0]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.drySkin[1]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.drySkin[2]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.drySkin[3]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.drySkin[4]}</li>
                    
                </ul>
                <br>

                <h2>We suggest the following locations</h2>

                <br>

                <ul>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.drySkin[0]}</li>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.drySkin[1]}</li>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.drySkin[2]}</li>
                </ul>


            `
            $(".results").html(results)

        }

        // DARK NORMAL SKIN

        if (skinComplexion == "dark" && skinType == "normal"){

            const results = `
                <h2>We suggest the following beauty products for <em>dark</em> skin complexion and <em>normal</em> skin type</h2>
                <br>
                <ul>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.normalSkin[0]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.normalSkin[1]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.normalSkin[2]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.normalSkin[3]}</li>
                    <li>${findBeautyProducts.darkSkinBeautyProducts.normalSkin[4]}</li>
                    
                </ul>
                <br>

                <h2>We suggest the following locations</h2>

                <br>

                <ul>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.normalSkin[0]}</li>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.normalSkin[1]}</li>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.normalSkin[2]}</li>
                    <li>${findBeautyProducts.locationForDarkSkinProduct.normalSkin[3]}</li>
                </ul>


            `
            $(".results").html(results)

        }


           // LIGHT OILY SKIN

           if (skinComplexion == "light" && skinType == "oily"){

            const results = `
                <h2>We suggest the following beauty products for <em>light</em> skin complexion and <em>oily</em> skin type</h2>
                <br>
                <ul>
                    <li>${findBeautyProducts.lightSkinBeautyProducts.oilySkin[0]}</li>
                    <li>${findBeautyProducts.lightSkinBeautyProducts.oilySkin[1]}</li>
                    <li>${findBeautyProducts.lightSkinBeautyProducts.oilySkin[2]}</li>
                    <li>${findBeautyProducts.lightSkinBeautyProducts.oilySkin[3]}</li>
                    <li>${findBeautyProducts.lightSkinBeautyProducts.oilySkin[4]}</li>
                </ul>
                <br>

                <h2>We suggest the following locations</h2>

                <br>

                <ul>
                    <li>${findBeautyProducts.locationForLightSkinProduct.oilySkin[0]}</li>
                    <li>${findBeautyProducts.locationForLightSkinProduct.oilySkin[1]}</li>
                    
                </ul>


            `
            $(".results").html(results)

        }

            

  


    })
})




