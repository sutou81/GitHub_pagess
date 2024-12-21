const modal= document.getElementById("modal");
const closeBtn= document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalPrice = document.getElementById('modal-price');
const orderBtn = document.getElementById('order-btn')

//パスタの情報を格納 以下はjsonではなく、javascriptオブジェクト(配列内に格納された)(※jsonは文字列にしたもの'{"name":"サーモンとほうれん草パスタ","price":900}'(←※))
//javascriptオブジェクトをjson形式にする(文字列)→JSON.stringify(a)(上記の※印の様になる)、逆にjsonを、javascript形式にする→JSON.parse()
//rails みたいな値の取り方(.name)ができるのは、javascriptオブジェクトjsonは値が取り出せない
const pastaDetails = [
  {name:"サーモンとほうれん草パスタ", price:900},
  {name:"明太子パスタ", price:800},
  {name:"ミートソースパスタ", price:700},
  {name:"イカ墨パスタ", price:700}
];


//各画像にクリックイベントを設定
//以下は、querySelectorを採用している、利点id,class関係なく取得できる。
//しかし、querySelectorでは、同じクラス名を持つ複数の要素があった場合、1つめの要素しかしゅとくできない⇩(同じ様なものgetElementByClassName)
//そこで、querySelectouAllがある　これで同じクラスをもつ全要素を取得できる
document.querySelectorAll(".contents-item img").forEach((img, index) => {
  img.style.cursor = "pointer"
  img.addEventListener('click', () =>{
    modalTitle.textContent= pastaDetails[index].name
    modalPrice.textContent = `価格:${pastaDetails[index].price}円`
    modalImage.src = img.src;
    document.getElementById('quantity').value = 1;//初期数量
    modal.style.display = "block"
  })
})

//const contentsItem = document.querySelector('.contents-item');
//contentsItem.style.cursor = 'pointer';//一番目の絵をhoverした際のクリックできる旨のマウスポインターに形状を変更

//以下のonclikの書き方は初心者の書き方
//正式にはcontentsItem.addeEventListener('click',() => {処理})って書く

//閉じるボタンでモーダルを閉じる
closeBtn.onclick = function(){
  modal.style.display= "none";
};

//外側クリックでモーダルを閉じる
window.onclick = function(event){
  if(event.target === modal) {
    modal.style.display ="none";
  }
};

orderBtn.addEventListener('click',() =>{
  const quantity = document.getElementById('quantity').value;
  alert(`${modalTitle.textContent}を${quantity}個注文しました！`);
  modal.style.display = "none";
})