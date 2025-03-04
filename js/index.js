const masinlar = document.getElementById('masinlar');
const btn = document.getElementById('btn');
const marka = document.getElementById('marka');
const model = document.getElementById('model');
const il = document.getElementById('il');
const maks = document.getElementById('maks');
const city = document.getElementById('city');
const val = document.getElementById('val');
const ban = document.getElementById('ban');
const selects = document.querySelectorAll('select');
const markalar = Array.from(new Set(data.map((item, i) => { return item.brand }))).sort()
const modeller = Array.from(new Set(data.map(item => item.model)));
const cities = Array.from(new Set(data.map(item => item.city))).sort();
const vals = Array.from(new Set(data.map(item => item.currency)));
const bans = Array.from(new Set(data.map(item => item.banType))).sort();
const ilArr = Array.from(new Set(data.map(item => item.year))).sort();
  
const content = document.getElementById("content");
let count = 8;
  
function show() {
   content.innerHTML = ''
    for (let i = 0; i < count; i++) {
      content.innerHTML += `
        <article class=" w-[48%] bg-white  sm:w-[32%] md:w-[32%] xl:w-[23%] max-h-[265px] rounded-[10px] overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] transition  hover:shadow-md">
          <div class="h-[60%] overflow-hidden">
            <img class="max-h-[150px] w-full object-cover"
              src="${data[i].images}"
              alt="Masin" />
          </div>
          <div class="h-[40%] px-2 py-1">
            <h3 class="text-[#212c3a] text-[16px] md:text-[17px] font-bold leading-[17px]">
              ${data[i].price} ${data[i].currency}
            </h3>
            <p class=" text-[13px] md:text-[15px] text-[#212c3a]">
              ${data[i].brand} ${data[i].model}
            </p>
            <p class="text-[13px] md:text-[15px] text-[#212c3a]">
              ${data[i].year}, ${data[i].engine}, ${data[i].odometer} ${data[i].odometerUnit}
            </p>
            <span class="text-[12px] md:text-[13px] text-[#8d94ad]">
              ${data[i].city},  ${data[i].dates}
            </span>
          </div>
        </article>
      `;
    }
  }
  
show();

function artir() {
  if (count < data.length) {
    count += 8;
    console.log(count);
    
  }
  if (count > data.length) {
    count = data.length;
    document.getElementById('btn-2').style.display='none'
  }
  
show();
}

  

  