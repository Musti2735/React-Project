REACT İLE PROJE BAŞLATMAK
Önce noje.js kurulur. node.js kurulu ile "node -v" komutu ile versiyon kontrol edilir.
Terminal başlatılır.
"nmp init" komutu ile package.json aynı klasör altında oluşturulur.
İlgili klasör içinde index.js dosyası oluşturulur.
package.json içinde "test" "start":"index node" ile değiştirilerilir. Böylelikle terminalde npm start ile run yapılabilir.
index.js dosyasına modül ekleyebilmek için package.jsonda "type": "module", ilk obje içine eklenir.
app.js diye ayrı bir modül oluşturabiliriz ya da dışarıdan modül indirebilir.
modül import etme => index.js dosyasında "import {modül ismi} from "./app.js"" yapılır. app.js dosyasında en son satırda "export default {modül ismi};" yapılır.
Modülü dışarıdan indirmek için önce modül terminal üzerinde komutlarla indirilir ve aynı şekilde import edilir.


FETCH 
npm i node-fetch ile kurulumu yapılır
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then(/users) => console.log(users))
)
komutu ile herhangi bir fakeapi obj olarak çağrılır.

ASYNC FONKSİYONU - Çağrılan objelerin sıra ile gelmesi sağlanırç
async function data(){
    const users1 = await (
        await fetch("https://jsonplaceholder.typicode.com/users/1")
    ).json();


    const users2 = await (
        await fetch("https://jsonplaceholder.typicode.com/users/2")
    ).json();

    console.log(users1)
    console.log(users2)
}
data()



