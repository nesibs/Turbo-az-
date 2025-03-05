  
const content = document.getElementById("content");
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

let count = 8;
function show() {
  content.innerHTML = '';
  data
      .slice(0, count)
      .map(item => {
          content.innerHTML += `
        <article class=" w-[48%] h-[250px] bg-white  sm:w-[32%] md:w-[32%] xl:w-[23%]  rounded-[10px] overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] transition  hover:shadow-md">
          <div class="h-[60%] overflow-hidden">
            <img class="max-h-[150px] w-full object-cover"
              src="${item.images[0]}"
              alt="Masin" />
          </div>
          <div class="h-[40%] px-2 py-1">
            <h3 class="text-[#212c3a] text-[16px] md:text-[17px] font-bold leading-[17px]">
              ${item.price} ${item.currency}
            </h3>
            <p class=" text-[13px] md:text-[15px] text-[#212c3a]">
              ${item.brand} ${item.model}
            </p>
            <p class="text-[13px] md:text-[15px] text-[#212c3a]">
            ${item.year},${item.engine} L, ${item.odometer} ${item.odometerUnit}
            </p>
            <span class="text-[12px] md:text-[13px] text-[#8d94ad]">
              ${item.city}, ${item.dates}
            </span>
          </div>
        </article>
      `;
   })
 }
 
show();
function filtir() {
  if (count < data.length) {
      count += 8;
  }
  if (count > data.length) {
      count = data.length;
      btn.style.display = "none"
  }
  show();
}
function increase() {
  if (count < data.length) {
    count += 8;
}
if (count > data.length) {
    count = data.length;
    btn.style.display = "none"
}
show();
}

function selOpt() {
  marka.innerHTML += markalar.map(item => `<option>${item}</option>`).join("");
  city.innerHTML += cities.map(item => `<option>${item}</option>`).join("");
  val.innerHTML += vals.map(item => `<option>${item}</option>`).join("");
  ban.innerHTML += bans.map(item => `<option>${item}</option>`).join("");
  il.innerHTML += ilArr.map(item => `<option>${item}</option>`).join("");
  maks.innerHTML += ilArr.sort((a, b) => b - a).map(item => `<option>${item}</option>`).join("");
}

function filterData() {
  data = zapaz.filter(item =>
    (!marka.value || item.brand === marka.value) &&
    (!model.value || item.model === model.value) 
  );
  show();
}

marka.addEventListener("change", () => {
  model.innerHTML = '<option value="">Model</option>' + 
    [...new Set(data.filter(car => car.brand === marka.value).map(car => car.model))]
      .map(item => `<option>${item}</option>`).join("");
  filterData();
});

model.addEventListener("change", filterData);

selOpt();


function handleSelect(xana) {
  const rza = xana.value;
  const elem = xana.name;
  data = zapaz.filter(item => item[elem] == rza); 
}

  