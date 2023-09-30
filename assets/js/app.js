
const testScore = document.querySelector(".test-scores");
const jsonFilePath = '/results-summary-component-using-grid/data.json';

fetch(jsonFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then((jsonData) => {

    
    let obtainedScore = 0;
    jsonData.forEach(element => {
        
        obtainedScore += element["score"];
        let html = 
        `
        <li class="${`${element["category"]}`.toLowerCase()}">
          <div class="test">
            <img src="${element["icon"]}" alt="${element["category"]} icon"> 
            <span>${element["category"]}</span>
          </div>
          <div class="score">
            <span class="obtained-score">${element["score"]}</span> <span class="total-score" >/ 100</span>
          </div>
        </li>
        `;
        testScore.innerHTML += html;
    });
    obtainedScore /= jsonData.length;
    obtainedScore = obtainedScore.toFixed(0);
    const averageObtainedScore = document.querySelector(".result .obtained-score");
    averageObtainedScore.innerHTML = obtainedScore;
    
  })
  .catch((error) => {
    console.error(`Error fetching and parsing JSON: ${error.message}`);
  });