console.log("video 27")

//score: Gioi, Kha, Trung Binh, Yeu


const score = 2;
switch(true){

    case (score >=8 && score <= 10) :
        console.log("Gioi");
        break;
    case (score >= 6 && score < 8):
        console.log("Kha");
        break;
    case (score >=4&& score<6):
        console.log("Trung Binh");
        break;

        default:
            console.log("Yeu");


}