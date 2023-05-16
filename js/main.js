const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const init = function (checkWindowWidth) {

    const companySwiper = new Swiper(".Company-swiper", {
        speed: 500,
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     disabledClass: 'none'
        // },
        on: {
            // init: function () {
            //     const companySwiperThis = this
            //     if (checkWindowWidth) {
            //         this.navigation.nextEl[0].onclick = function () {
            //             logoCompanySwiper.slideTo(companySwiperThis.realIndex)
            //             logoCompanySwiper.slides.find((item) => item.classList.contains("swiper-slide-active")).classList.remove("swiper-slide-active")
            //             logoCompanySwiper.slides[companySwiperThis.realIndex].classList.add("swiper-slide-active")
            //         }
            //     }
            // },
            autoplay: function () {
                console.log("init")
                if (checkWindowWidth) {
                    console.log("run")
                    logoCompanySwiper.slideTo(companySwiper.realIndex)
                    logoCompanySwiper.slides.find((item) => item.classList.contains("swiper-slide-active")).classList.remove("swiper-slide-active")
                    logoCompanySwiper.slides[companySwiper.realIndex].classList.add("swiper-slide-active")
                }
            },
        }
    })
    const logoCompanySwiper = new Swiper(".LogoCompany-swiper", {
        slidesPerView: 'auto',
        direction: "vertical",
        //slideActiveClass: "none",
        on: {
            init: function () {
                const logoCompanySwiperThis = this
                if (checkWindowWidth) {
                    //this.slides.find((item) => item.classList.contains("none")).classList.add("swiper-slide-active")
                    // logoCompanySwiperThis.slides.forEach((item, index) => {
                    //     item.onclick = function () {
                    //         logoCompanySwiperThis.slides.find((item) => item.classList.contains("swiper-slide-active")).classList.remove("swiper-slide-active")
                    //         item.classList.add("swiper-slide-active")
                    //         logoCompanySwiperThis.slideTo(logoCompanySwiperThis.slides.indexOf(item, 0))
                    //         companySwiper.slideToLoop(logoCompanySwiperThis.slides.indexOf(item, 0))
                    //     }
                    // })
                }
            },
        }
    })
    const jobsSwiper = new Swiper(".Jobs-swiper", {
        allowTouchMove: false,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
    const recruitmentSwiper = new Swiper(".Recruitment-swiper", {
        loop: true,
        autoplay: true,
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 6,
        allowTouchMove: false,
    })
    const recruitmentSwiper_mobile = new Swiper(".Recruitment-swiper-mobile", {
        loop: true,
        autoplay: true,
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 1,
        allowTouchMove: false,
    })
    const bannerSwiper = new Swiper(".Banner-swiper", {
        allowTouchMove: false,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000
        },
    })

    const topCompany = new Swiper(".TopCompany-swiper", {
        speed: 500,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        autoplay: {
            speed: 8000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    })
    const followCompany = new Swiper(".FollowCompany-swiper", {
        speed: 500,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        autoplay: {
            speed: 8000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    })
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}
const myApp = angular.module("myApp", ["ngRoute"])
    // .config(function ($routeProvider) {
    //     $routeProvider
    //         .when("/", {
    //             templateUrl: "./pages/main.html",
    //             controller: "mainController"
    //         })
    //         .when("/Dangtuyen", {
    //             templateUrl: "./pages/dangtuyen.html",
    //             controller: "mainController"
    //         })
    //         .when("/Tracnghiem", {
    //             templateUrl: "./pages/tracnghiem.html",
    //             controller: "mainController"
    //         })
    //         .when("/Blog", {
    //             templateUrl: "./pages/blog.html",
    //             controller: "mainController"
    //         })
    // })
    .service("myService", function ($http) {
        this.getData = function () {
            // return $http.get("./data/data.json").then(function (response) {
            //     return response.data
            // })
            return {
                "Language": ["vi", "en"],
                "Company": [
                    {
                        "id": 1,
                        "name": "Netcompany",
                        "shortName": "Netcompany",
                        "discriptions": "Netcompany is one of Northern Europe’s most successful IT Companies with...",
                        "slogan": "IT People Leading IT People",
                        "Location": "Hồ Chí Minh",
                        "jobs": 3,
                        "listJob": [
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            },
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            }
                        ],
                        "image": "./images/Netcompany.jpg",
                        "logo": "./images/Logo-Netcompany.jpg"
                    },
                    {
                        "id": 2,
                        "name": "NGÂN HÀNG Á CHÂU (ACB) ",
                        "shortName": "NGÂN HÀNG Á CHÂU (ACB) ",
                        "discriptions": "ACB Fintech: we’re building a startup at ACB to serve our millions of cu...",
                        "slogan": "Khởi đầu con đường thành công mang dấu ấn của riêng bạn",
                        "Location": "Hồ Chí Minh, Hồ Chí Minh",
                        "jobs": 10,
                        "listJob": [
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            },
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            }
                        ],
                        "image": "./images/ACB.jpg",
                        "logo": "./images/Logo-ACB.jpg"
                    },
                    {
                        "id": 3,
                        "name": "NTT DATA Vietnam ",
                        "shortName": "NTT DATA Vietnam ",
                        "discriptions": "NTT DATA is a world-wide group born in Japan. We are the top 6 global bu...",
                        "slogan": "Trusted Global Innovator",
                        "Location": "Hà Nội, Hồ Chí Minh, Đà Nẵng",
                        "jobs": 8,
                        "listJob": [
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            },
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            }
                        ],
                        "image": "./images/NTTDATA.jpg",
                        "logo": "./images/Logo-NTTDATA.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Bkav ",
                        "shortName": "Bkav ",
                        "discriptions": "Bkav là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, ph...",
                        "slogan": "Do your best, the rest will come!",
                        "Location": "Hà Nội",
                        "jobs": 3,
                        "listJob": [
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            },
                            {
                                "position": "Unity Developer",
                                "salary": "Lên tới 1000USD",
                                "time": 3
                            }
                        ],
                        "image": "./images/Bkav.jpg",
                        "logo": "./images/Logo-Bkav.jpg"
                    },
                    {
                        "id": 5,
                        "name": "NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN BƯU ĐIỆN LIÊN VIỆT ",
                        "shortName": "NLienVietPostBank",
                        "discriptions": "Hiện nay, với số vốn điều lệ hơn 10746 tỷ đồng và mạng lưới phủ khắp toà...",
                        "slogan": "LienVietPostBank - Liên Kết Phát Triển",
                        "Location":  "Hà Nội, Hồ Chí Minh, Đà Nẵng",
                        "jobs": 3,
                        "image": "./images/LienViet.jpg",
                        "logo": "./images/Logo-LienViet.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Toyota Financial Services Vietnam",
                        "shortName": "Toyota Financial Services Vietnam",
                        "discriptions": "Công Ty TNHH MTV Tài Chính Toyota Việt Nam (TFSVN) là công ty tài chính...",
                        "slogan": "Toyota Financial Services Vietnam",
                        "Location":  "Hồ Chí Minh",
                        "jobs": 1,
                        "image": "./images/Toyota.jpg",
                        "logo": "./images/Logo-Toyota.jpg"
                    }
                ],
                "Blog": [
                    {
                        "id": 1,
                        "title": "Phương pháp tự học của một Developer đúng nghĩa",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog1.png"
                    },
                    {
                        "id": 2,
                        "title": "Động lực để bạn trở thành Developer",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog2.png"
                    },
                    {
                        "id": 3,
                        "title": "LOMBOK là gì? Sinh code tự động trên eclipse - intello",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog3.png"
                    },
                    {
                        "id": 4,
                        "title": "Cùng tìm hiểu về Command Query Responsibility Seggregation",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog4.png"
                    },
                    {
                        "id": 5,
                        "title": "DRM là gì? Cùng tìm hiểu về Digital Rights Management",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog5.png"
                    },
                    {
                        "id": 6,
                        "title": "SAGA Pattern trong Microservices",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog6.png"
                    },
                    {
                        "id": 7,
                        "title": "Câu hỏi phỏng vấn về Android mà Developer thường gặp",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog7.png"
                    },
                    {
                        "id": 8,
                        "title": "Kỹ năng cần thiết để trở thành Software Manager",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog8.png"
                    },
                    {
                        "id": 9,
                        "title": "Hướng dẫn sử dụng Content Provider trong Android",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog9.png"
                    },
                    {
                        "id": 10,
                        "title": "NFT | Tiềm năng hay \"Bong Bóng Công Nghiệp\"",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog10.png"
                    },
                    {
                        "id": 11,
                        "title": "Các nhóm ngành CNTT liệu có phù hợp với bạn?",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog11.png"
                    },
                    {
                        "id": 12,
                        "title": "Hướng dẫn sử lý database trong Spring MVC 5",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog12.png"
                    },
                    {
                        "id": 13,
                        "title": "Mới học lập trình thì nên học những gì",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog13.png"
                    },
                    {
                        "id": 14,
                        "title": "Top 5 câu hỏi phỏng vấn C++ hay và khó",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog14.png"
                    },
                    {
                        "id": 15,
                        "title": "Mô hình ngôn ngữ LAMDA - Công nghệ đứng đằng sau chatbot",
                        "content": "Khi bạn bước vào con đường của một lập trình viên, tự học luôn là điều cốt lõi trong quá trình phát triển sự nghiệp của...",
                        "time": "Today",
                        "image": "./images/Blog15.png"
                    }
                    
                ],
                "Banner": [
                    "./images/Banner1.jpg",
                    "./images/Banner2.jpg",
                    "./images/Banner3.jpg",
                    "./images/Banner4.jpg",
                    "./images/Banner5.jpg"
                ],
                "TextLanguage": {
                    "Header" : {
                        "NavTop" : {
                            "Recruit" : {
                                "vi-VN" : "Đăng tuyển",
                                "en-US" : "Recruit"
                            },
                            "Contact" : {
                                "vi-VN" : "Liên hệ",
                                "en-US" : "Contact"
                            }
                        },
                        "Nav" : {
                            "Home" : {
                                "vi-VN" : "Trang Chủ",
                                "en-US" : "Home"
                            },
                            "Test" : {
                                "vi-VN" : "Trắc nghiệm tính cách",
                                "en-US" : "Personality Test"
                            },
                            "Recruit" : {
                                "vi-VN" : "Đăng tuyển",
                                "en-US" : "Recruit"
                            }
                        },
                        "Button" : {
                            "Signin" : {
                                "vi-VN" : "Đăng nhập",
                                "en-US" : "Sign in"
                            },
                            "Signup" : {
                                "vi-VN" : "Đăng ký",
                                "en-US" : "Sign up"
                            },
                            "Username" : {
                                "vi-VN" : "Tên đăng nhập",
                                "en-US" : "Username"
                            }
                        }
                    },
                    "Blog" : {
                        "New" : {
                            "vi-VN" : "Mới nhất",
                            "en-US" : "New"
                        },
                        "ThreeList" : [
                            {
                                "vi-VN" : "Lập trình",
                                "en-US" : "Programming"
                            },
                            {
                                "vi-VN" : "HR",
                                "en-US" : "HR"
                            },
                            {
                                "vi-VN" : "Phỏng vấn",
                                "en-US" : "Interview"
                            }
                        ],
                        "Expert" : {
                            "vi-VN" : "Chuyên gia nói",
                            "en-US" : "Expert talk"
                        }
                    },
                    "Personality" : {
                        "Section1" : {
                            "Heading" : {
                                "vi-VN" : "Trắc nghiệm tính cách công việc",
                                "en-US" : "Job personality test"
                            },
                            "Discriptions" : {
                                "vi-VN" : "Trắc nghiệm tính cách công việc (Workplace Personality Test) giúp phân tích đặc điểm tính cách và khả năng của bạn để từ đó bạn có thể xác định mức độ phù hợp với các công việc IT và môi trường làm việc tại các công ty Công nghệ trên thị trường.",
                                "en-US" : "Workplace Personality Test helps to analyze your personality characteristics and abilities so that you can determine your suitability for IT jobs and the working environment at companies. technology on the market."
            
                            },
                            "Button" : {
                                "vi-VN" : "Kiểm tra ngay",
                                "en-US" : "Check now"
                            },
                            "SubHeading1" : {
                                "vi-VN" : "60 QUESTIONS CODE",
                                "en-US" : "Job personality test"
                            },
                            "Text1" : {
                                "vi-VN" : "Bạn sẽ chọn mức độ đồng ý hoặc không đồng ý của bạn với các câu nói kiểu như “Tôi luôn đầy năng lượng mọi lúc” hoặc “Tôi là người nhiệt tình” bằng cách chọn 1 trong 6 mức độ từ “Hoàn toàn không đúng” đến “Hoàn toàn đúng”.",
                                "en-US" : "You will choose your level of agreement or disagreement with statements like “I am full of energy all the time” or “I am enthusiastic” by choosing 1 of 6 levels from “Absolutely not true”. ” to “Absolutely true”."
                            },
                            "SubHeading2" : {
                                "vi-VN" : "PHÂN TÍCH 6 YẾU TỐ TÍNH CÁCH",
                                "en-US" : "ANALYSIS OF THESE 6 CHARACTERISTICS FACTORS"
                            },
                            "Text2" : {
                                "vi-VN" : "Bài kiểm tra được dùng để phân tích 6 yếu tố tính cách: (1) Tính chính trực & khiêm tốn, (2) Tính ổn định cảm xúc, (3) Tính hướng ngoại, (4) Tính dễ chịu, (5) Tính tận tâm, (6) Tính cởi mở từ 25 khía cạnh tính cách của con người.",
                                "en-US" : "The test is used to analyze 6 personality factors: (1) Integrity & humility, (2) Emotional stability, (3) Extroversion, (4) Pleasantness, (5) Conscientiousness, (6) Openness from 25 aspects of human personality."
                            }
                            
                        },
                        "Section2" : {
                            "Heading" : {
                                "vi-VN" : "NGUỒN GỐC & ĐỘ TIN CẬY",
                                "en-US" : "ORIGINAL & RELIABLE"
                            },
                            "Text1" : {
                                "vi-VN" : "Workplace Personality Test phát triển bởi Saramin x TopDev có nguồn gốc từ bài đánh giá tính cách theo mô hình HEXACO được tạo ra bởi Kibeom Lee & Michael C. Ashton, sau đó được giới thiệu trong cuốn sách “The H Factor of Personality”. Từ năm 2000 tới hiện tại, mô hình này đã được cải tiến và cập nhật liên tục, được phổ biến rộng rãi trên nhiều quốc gia.",
                                "en-US" : "The Workplace Personality Test developed by Saramin x TopDev is derived from the HEXACO modeled personality assessment created by Kibeom Lee & Michael C. Ashton, then introduced in the book “The H Factor of Personality”. From 2000 to present, this model has been continuously improved and updated, widely popularized in many countries."
                            },
                            "Text2" : {
                                "vi-VN" : "Sau khi hoàn thành, số điểm của bạn ở từng yếu tố sẽ được thống kê và so sánh với mức trung bình (từ những người đã tham gia). Phương pháp đánh giá này thường được ứng dụng trong lĩnh vực tâm lý và tuyển dụng.",
                                "en-US" : "After completing, your score in each factor will be counted and compared with the average (from those who have participated). This assessment method is often applied in the field of psychology and recruitment."
                            },
                            "Text3" : {
                                "vi-VN" : "(*) Saramin là nền tảng tuyển dụng & Tech hàng đầu tại Hàn Quốc.",
                                "en-US" : "(*) Saramin is the leading recruitment & Tech platform in Korea."
                            }
                        },
                        "Section3" : {
                            "Heading1" : {
                                "vi-VN" : "Saramin x TOPDEV",
                                "en-US" : "Saramin x TOPDEV"
                            },
                            "Text1" : {
                                "vi-VN" : "Bài kiểm tra được nghiên cứu phát triển và thiết kế độc quyền bởi Saramin x TopDev.",
                                "en-US" : "The test is researched, developed and designed exclusively by Saramin x TopDev."
                            },
                            "Heading2" : {
                                "vi-VN" : "Dành riêng cho Developer",
                                "en-US" : "Exclusively for Developers"
                            },
                            "Text2" : {
                                "vi-VN" : "Độ tin cậy và hiệu lực của bài kiểm tra đã được xác minh và tinh chỉnh thông qua các thử nghiệm sơ bộ bởi Saramin x TopDev. Khả dụng trên cả PC & Mobile.",
                                "en-US" : "The reliability and validity of the test have been verified and refined through preliminary tests by Saramin x TopDev. Available on both PC & Mobile."
                            },
                            "Heading3" : {
                                "vi-VN" : "Áp dụng trong tìm việc & tuyển dụng",
                                "en-US" : "Apply in job search & recruitment"
                            },
                            "Text3" : {
                                "vi-VN" : "Bài kiểm tra được thiết kế để phân tích tính cách & xác định mức độ phù hợp với các công việc IT và môi trường làm việc.",
                                "en-US" : "The test is designed to analyze personality & determine suitability for IT jobs and work environments."
                            },
                            "Heading4" : {
                                "vi-VN" : "Thiết kế phù hợp cho người Châu Á",
                                "en-US" : "Designed for Asians"
                            },
                            "Text4" : {
                                "vi-VN" : "Phát triển dựa trên việc kết hợp các lý thuyết về tính cách hiện đại nhất để giải thích rõ hơn các đặc điểm tính cách của người Châu Á.",
                                "en-US" : "Developed based on combining the most modern personality theories to better explain Asian personality traits."
                            }
                        },
                        "Section4" : {
                            "Heading" : {
                                "vi-VN" : "Kiểm tra tính cách công việc miễn phí ngay hôm nay",
                                "en-US" : "Free Job Personality Test Today"
                            },
                            "Text" : {
                                "vi-VN" : "Chỉ mất chưa tới 05 phút với 60 câu hỏi ngắn trắc nghiệm & nhận ngay kết quả phân tích chi tiết.",
                                "en-US" : "It takes less than 5 minutes with 60 short multiple-choice questions & instantly get detailed analysis results."
                            },
                            "HeadingQ1" : {
                                "vi-VN" : "ĐỐI TƯỢNG CÓ THỂ THAM GIA THỰC HIỆN BÀI TEST?",
                                "en-US" : "SUBJECTS CAN JOIN THE TEST?"
                            },
                            "TextQ1" : {
                                "vi-VN" : "Tất cả các lập trình viên / người làm trong lĩnh vực công nghệ thông tin",
                                "en-US" : "All programmers / people working in the field of information technology"
                            },
                            "HeadingQ2" : {
                                "vi-VN" : "MÌNH CÓ THỂ LÀM BÀI TEST NHIỀU LẦN KHÔNG?",
                                "en-US" : "CAN I TAKE MANY TIMES?"
                            },
                            "TextQ2" : {
                                "vi-VN" : "Bạn có thể thực hiện bài test mỗi tháng một lần nhé!",
                                "en-US" : "You can take the test once a month!"
                            },
                            "HeadingQ3" : {
                                "vi-VN" : "MÌNH CÓ CẦN LƯU Ý GÌ TRƯỚC KHI THỰC HIỆN BÀI TEST KHÔNG?",
                                "en-US" : "WHAT DO I NEED TO NOTE BEFORE TESTING?"
                            },
                            "TextQ3" : {
                                "vi-VN" : "Bạn hãy chọn một nơi có đường truyền internet ổn định, và giữ một tâm lý bình ổn nhất nhé. Và đừng quên trung thực với những lựa chọn khi trả lời câu hỏi.",
                                "en-US" : "Please choose a place with a stable internet connection, and keep a stable mind. And don't forget to be honest with your choices when answering questions."
                            },
                            "Button" : {
                                "vi-VN" : "Kiểm tra ngay",
                                "en-US" : "Check now"
                            }
                        }
                    },
                    "Recruit" : {
                        "Heading" : {
                            "vi-VN" : "Vui lòng điền thông tin liên hệ vào mẫu bên dưới. TopDev rất hân hạnh được cung cấp cho bạn dịch vụ tuyển dụng IT & kết nối Developer hàng đầu.",
                            "en-US" : "Please fill in your contact information in the form below. TopDev is very pleased to provide you with the leading IT recruitment & Developer matching service."
                        },
                        "Text1" : {
                            "vi-VN" : "Tên công ty",
                            "en-US" : "Company name"
                        },
                        "Text2" : {
                            "vi-VN" : "Họ & Tên",
                            "en-US" : "Surname & First Name"
                        },
                        "Text3" : {
                            "vi-VN" : "Vị trí hiện tại",
                            "en-US" : "Current position"
                        },
                        "Text4" : {
                            "vi-VN" : "Email",
                            "en-US" : "Email"
                        },
                        "Text5" : {
                            "vi-VN" : "Số điện thoại",
                            "en-US" : "Phone number"
                        },
                        "Text6" : {
                            "vi-VN" : "Vui lòng mô tả yêu cầu tuyển dụng IT của bạn hoặc để lại ghi chú cụ thể cho chúng tôi",
                            "en-US" : "Please describe your IT recruitment requirements or leave us a specific note"
                        }
                    },
                    "Main" : {
                        "Heading1" : {
                            "vi-VN" : "Công ty Nổi bật",
                            "en-US" : "Featured company"
                        },
                        "Heading2" : {
                            "vi-VN" : "Công Việc Hot Hôm Nay",
                            "en-US" : "Hot Jobs Today"
                        },
                        "Heading3" : {
                            "vi-VN" : "Nhà tuyển dụng nổi bật",
                            "en-US" : "Featured Employers"
                        },
                        "Heading4" : {
                            "vi-VN" : "Các Công Ty Phổ Biến",
                            "en-US" : "Popular Companies"
                        }
                    },
                    "Footer" : {
                        "Discriptions" : {
                            "vi-VN" : ["Tầng 1, Toà nhà CTU, đường 3/2, Phường An Khánh, Quận Ninh Kiều, Thành phố Cần Thơ", "Copyright © CT188-06", "Liên Hệ: 028 6273 xxxx - contact@topdev.vn"],
                            "en-US" : ["Floor 1, CTU Building, 3/2 Street, An Khanh Ward, Ninh Kieu District, Can Tho City", "Copyright © CT188-06", "Contact: 028 6273 xxxx - contact@topdev.vn"]
                        },
                        "Heading1" : {
                            "vi-VN" : "Về TopDev", 
                            "en-US" : "About TopDev"
                        },
                        "Heading2" : {
                            "vi-VN" : "Ứng viên", 
                            "en-US" : "Candidate"
                        },
                        "Heading3" : {
                            "vi-VN" : "Nhà Tuyển Dụng", 
                            "en-US" : "Employer"
                        },
                        "List1" : {
                            "vi-VN" : ["Về chúng tôi", "Liên hệ", "Quy định sử dụng", "Giải quyết khiếu nại", "Cơ hội việc làm", "Thỏa thuận sử dụng"],
                            "en-US" : ["About Us", "Contact Us", "Terms of Use", "Complaint Resolution", "Job Opportunities", "Usage Agreement"]
                        },
                        "List2" : {
                            "vi-VN" : ["Tính lương Gross-Net", "Tạo CV", "Tìm kiếm công việc IT", "Trắc nghiệm tính cách"], 
                            "en-US" : ["Gross-Net Payroll", "Create CV", "Search IT jobs", "Personality Quiz"]
                        },
                        "List3" : {
                            "vi-VN": ["Đăng việc làm IT", "Tìm kiếm nhân tài"],
                            "en-US": ["Post IT jobs", "Search for talent"]
                        }
                    }
                }
            }
            
            
        }
    })
    .controller("mainController", function ($scope, $timeout, $window, myService, $rootScope) {
        // myService.getData().then(function (data) {
        //     $scope.listCompany = data.Company
        //     $scope.listJob = [].concat(...data.Company.map((listJobItem) => listJobItem.listJob ? listJobItem.listJob.map((job) => Object.assign({}, { companyName: listJobItem.name, logo: listJobItem.logo }, job)) : []))
        //     $scope.listBlog = data.Blog
        //     $scope.listBanner = data.Banner
        //     $scope.listText = data.TextLanguage
        // })
        data = myService.getData()
        $scope.listCompany = data.Company
        $scope.listJob = [].concat(...data.Company.map((listJobItem) => listJobItem.listJob ? listJobItem.listJob.map((job) => Object.assign({}, { companyName: listJobItem.name, logo: listJobItem.logo }, job)) : []))
        $scope.listBlog = data.Blog
        $scope.listBanner = data.Banner
        $scope.listText = data.TextLanguage
        $scope.state = localStorage.getItem("user") ? true : false
        $rootScope.language = localStorage.getItem("language") ? localStorage.getItem("language") : "vi-VN"
        localStorage.setItem("language", $scope.language)
        $scope.toggleLanguage = function() {
            $scope.language = $scope.language == "vi-VN" ? "en-US" : "vi-VN"
            localStorage.setItem("language", $scope.language)
        }
        // ScrollToTop
        $scope.scrollToTop = function () {
            $window.scrollTo(0, 0)
        }
        // ScrollToTop
        $scope.showExit = false
        $scope.toggleExit = function() {
            $scope.showExit = $scope.showExit ? false : true
        }
        $scope.Exit = function() {
            localStorage.removeItem("user")
            location.reload()
        }
        // ChatBox
        $scope.checkChatBox = false
        $scope.toggleChatbox = function () {
            $scope.checkChatBox = $scope.checkChatBox ? false : true
        }
        $scope.listMessage = []
        $scope.listTroll =  ["Xin chào chúng tôi có thể giúp gì cho bạn"]
        $scope.scrollToBottom = function() {
            chatBoxBodyNode = $(".ChatBox-body")
            chatBoxBodyNode.scrollTo(0, chatBoxBodyNode.scrollHeight)
        }
        $scope.sendMessage = function(keyCode = 13) {
            inputNode = $("#ChatBox").querySelector("input")
            if (((keyCode == 13) && inputNode.value && (inputNode.value.trim() !== ""))) {
                $scope.listMessage.push(inputNode.value)
                inputNode.value = ""
            }
        }
        // ChatBox
        
        $scope.getTopNavHeight = function() {
            return $("#TopNav").clientHeight
        }

        // Menu Mobile
        $scope.toggleMenuMobile = function() {
            $("body").classList.toggle("overflow-hidden")
        }
        // Menu Mobile
        // Check Size
        // Check Size
        $timeout(function () {
            init($scope.checkWindowWidth)
        }, 1)
    })
    .controller('sizeController', function ($scope, $window, $rootScope, $timeout) {
        $rootScope.checkWindowWidth = $window.innerWidth >= 768 ? true : false;
        console.log($window.innerWidth)
        console.log($rootScope.checkWindowWidth)
        angular.element($window).bind('resize', function () {
            $rootScope.checkWindowWidth = $window.innerWidth >= 768 ? true : false;
            console.log($rootScope.checkWindowWidth)
            $rootScope.$apply()
            init($rootScope.checkWindowWidth)
        })
        angular.element($window).on('scroll', function () {
            $rootScope.scrollTop = $window.scrollY;
            $rootScope.$apply()
        });
        $timeout(function() {
            $rootScope.checkWindowWidth = $window.innerWidth >= 768 ? true : false;
            $rootScope.$apply()
            $timeout(function() {
                $(".spinner").remove()
            }, 100)
        }, 10)
    })


