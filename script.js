function calculateScore() {
    // 取得單選和多選的錯誤題數
    const singleMistakes = parseInt(document.getElementById("singleMistakes").value) || 0;
    const multiOneMistake = parseInt(document.getElementById("multiOneMistake").value) || 0;
    const multiTwoMistakes = parseInt(document.getElementById("multiTwoMistakes").value) || 0;
    const multiThreeOrMore = parseInt(document.getElementById("multiThreeOrMore").value) || 0;
    
    // 取得分數設置
    const singlePoints = parseFloat(document.getElementById("singlePoints").value) || 0;
    const multiPoints_1 = parseFloat(document.getElementById("multiPoints1").value) || 0;
    const multiPoints_2 = parseFloat(document.getElementById("multiPoints2").value) || 0;
    const multiPoints_3 = parseFloat(document.getElementById("multiPoints3").value) || 0;
    const totalPoints = parseFloat(document.getElementById("totalPoints").value) || 0;

    // 計算錯誤扣除的分數
    const singleScore = singleMistakes * singlePoints;
    const multiScore = (multiOneMistake * multiPoints_1) + 
                       (multiTwoMistakes * multiPoints_2) + 
                       (multiThreeOrMore * multiPoints_3);

    // 計算總分
    const finalScore = totalPoints - singleScore - multiScore;
    document.getElementById("result").innerText = "考試分數：" + finalScore + " 分";
}

function toggleSettings() {
    const settings = document.getElementById("scoreSettings");
    settings.style.display = settings.style.display === "none" ? "block" : "none";
}

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}