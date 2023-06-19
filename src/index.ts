
import { server } from "./lib/server.js";

console.clear();
//tipu pavad is didziuju 

type App = {
    init: () => void;
   
}
// const app: App = {
//     sum: (a,b) => {
//         return a + b;
//     },
//     x: () => {

//     },
//     y: 5,
// }

//patogesnis užrašymas
const app = {} as App;

app.init = () => {
    // susikurti reikiamus/trukstamus folderius ir failus
    //atsinaujinti info
    //duombaze:
       //prisijungti
       //pasiruosti struktura
       //surasyti pradinius duomenis
       //paleisti serverio logika
       //laike pasikartojanstys procesai:
         //issivalyti nereikalingus failus/info
         //atsinaujinti failus//info
         //backup darymas

         server.init();



}
app.init();


export default app;
