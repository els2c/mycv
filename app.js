(function () {
  var bolovsrol = document.getElementById("bolovsrol");
  var surgalt = document.getElementById("surgalt");
  var medleg = document.querySelector(".list");
  var profile = document.getElementById("profile");
  var html = [
    "<li>  <strong>2005-2016:</strong>&nbsp Д. Сүхбаатарын нэрэмжит I бүрэн  дунд сургууль</li><li><strong>2017-2018:</strong>&nbsp Хилийн 0101 дүгээр анги</li><li><strong>2020 -</strong>&nbsp МҮИС Програм хангамж</li>",
    "<li>    <strong>2017:</strong> Алгоритм ба Програмчлалын хэл /Си хэл/  </li>  <li><strong>2017:</strong> C++</li>  <li>    <strong>2020:</strong> Python хэл - Програмчлалын суурь ойлголт    /melearn.mn/  </li>  <li>    <strong>2020:</strong> Python хэл - Програмчлалын ахисан шатны    ойлголтууд /melearn.mn/  </li>  <li>    <strong>2020:</strong> HTML5, CSS3 эхнээс нь дуустал! /1234.mn/  </li>  <li>    <strong>2021:</strong> Javascript хэлийг эхнээс нь дуустал!    /1234.mn/  </li>",
  ];
  surgalt.classList.add("active");
  setTimeout(() => {
    medleg.innerHTML = html[0];
    bolovsrol.classList.add("active");
    surgalt.classList.remove("active");
  }, 4000);
  bolovsrol.addEventListener("click", function () {
    medleg.innerHTML = html[0];
    bolovsrol.classList.add("active");
    surgalt.classList.remove("active");
  });
  surgalt.addEventListener("click", function () {
    medleg.innerHTML = html[1];
    bolovsrol.classList.remove("active");
    surgalt.classList.add("active");
  });
  profile.addEventListener(
    "click",
    () => (document.location = "https://www.facebook.com/mongol.emdi/")
  );
})();
