const dumyData = [
    {courseImgName: "course1", courseName: "개성있는 일러스트 작품 만들기"},
    {courseImgName: "course2", courseName: "내가 만드는 나만의 악세사리"},
    {courseImgName: "course3", courseName: "내 이야기를 노래로!"},
    {courseImgName: "course4", courseName: "비전공자를 위한 웹 프로그래밍"},
    {courseImgName: "course5", courseName: "자신감 업! 메이크업 클래스"},
    {courseImgName: "course6", courseName: "아이돌 댄스 정복하기"},
    {courseImgName: "course7", courseName: "사진 작가에게 배우는 야외 사진"},
    {courseImgName: "course8", courseName: "기본부터 익히는 플라워 클래스"},
];

function getCourse(){
    const courseList = document.getElementById("courseList");
    dumyData.forEach(function(v){
        courseList.insertAdjacentHTML("beforeend",`
        <div class="col-md-6 col-lg-4 col-xl-3">
        <a href="#" class="course">
          <img src="../20231211/img/${v.courseImgName}.jpg" class="course-img" />
          <div class="info">
            <h4>${v.courseName}</h4>
            <div class="lecture">
              <img src="../20231211/img/user.png" />
              <span class="name">유으뜸</span>
            </div>
          </div>
        </a>
      </div>
        `);
    })
}
getCourse();