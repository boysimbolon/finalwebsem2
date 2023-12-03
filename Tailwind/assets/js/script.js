const swiper1 = new Swiper("#sec1-swiper", {
  autoplay: { delay: 10000 },
  slidesPerView: 1,
  loop: true,
  pagination: { el: ".banner-pagination", clickable: true },
});

let swiper2, swiper3;

window.onload = function () {
  if (document.body.offsetWidth <= 767) {
    const sbt = -(document.body.offsetWidth * 0.4);
    swiper2 = new Swiper("#sec2-swiper", {
      autoplay: 5000,
      slidesPerView: 1.2,
      loop: true,
      centeredSlides: true,
      spaceBetween: sbt,
    });

    swiper3 = new Swiper("#sec4-swiper", {
      autoplay: 5000,
      slidesPerView: 1.8,
      centeredSlides: true,
      loop: true,
    });
  } else {
    swiper2 = new Swiper("#sec2-swiper", {
      autoplay: 5000,
      slidesPerView: 4,
      loop: true,
      offsetPxAfter: 470,
      navigation: {
        prevEl: "#sec2-swiper-btn-L",
        nextEl: "#sec2-swiper-btn-R",
      },
    });

    swiper3 = new Swiper("#sec4-swiper", {
      autoplay: 0,
      slidesPerView: 3,
      loop: false,
      spaceBetween: 30,
      touchRatio: 0,
      simulateTouch: false,
    });
  }
};
        function validasi() {
            let full_name = document.forms["myForm"]["full_name"].value;
            let email = document.forms["myForm"]["email"].value;
            let username = document.forms["myForm"]["username"].value;
            let password = document.forms["myForm"]["password"].value;
            let gender = document.querySelector('input[name="gender"]:checked');
            let religion = document.forms["myForm"]["religion"].value;
            let address = document.forms["myForm"]["address"].value;
            let hobbies = document.querySelectorAll('input[name="checkbox"]:checked');

            if (full_name === "") {
                alert("Name must be filled out");
                return false;
            }

            if (email === "") {
                alert("E-mail must be filled out");
                return false;
            }

            if (username === "") {
                alert("Username must be filled out");
                return false;
            }

            if (password === "") {
                alert("Password must be filled out");
                return false;
            }

            if (!gender) {
                alert("Gender must be selected");
                return false;
            }

            if (religion === "") {
                alert("Religion must be filled out");
                return false;
            }

            if (address === "") {
                alert("Address must be filled out");
                return false;
            }

            if (hobbies.length === 0) {
                alert("At least one hobby must be selected");
                return false;
            }
            return true;
        }
    