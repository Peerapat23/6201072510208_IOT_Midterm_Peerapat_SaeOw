const form=document.getElementById('form');
const sensor_type=document.getElementById('sensor_type');
const sensor_id=document.getElementById('sensor_id');

form.addEventListener("submit",function(e){
   e.preventDefault();
    if(sensor_type.value== 'flow-transducer'&& sensor_id.value==''){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data[0].name} ${data[0].type} ${data[0].unit} ${data[0].range}  ${data[0].value}
                          ${data[1].name} ${data[1].type} ${data[1].unit} ${data[1].range}  ${data[1].value}
                          ${data[2].name} ${data[2].type} ${data[2].unit} ${data[2].range}  ${data[2].value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'flow-transducer' && sensor_id.value=='1'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer&sensor_id=1";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = `   ${data.name} ${data.type} ${data.unit} ${data.range} ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'flow-transducer' && sensor_id.value=='2'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer&sensor_id=2";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'flow-transducer' && sensor_id.value=='0'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer&sensor_id=0";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    /// end flow start level
    else if(sensor_type.value== 'level-transducer'&& sensor_id.value==''){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data[0].name} ${data[0].type} ${data[0].unit} ${data[0].range}  ${data[0].value}
                          ${data[1].name} ${data[1].type} ${data[1].unit} ${data[1].range}  ${data[1].value}
                          ${data[2].name} ${data[2].type} ${data[2].unit} ${data[2].range}  ${data[2].value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'level-transducer' && sensor_id.value=='1'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer&sensor_id=1";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'level-transducer' && sensor_id.value=='2'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer&sensor_id=2";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'level-transducer' && sensor_id.value=='0'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer&sensor_id=0";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    //// /// end level start temp
    else if(sensor_type.value== 'temperature-transducer'&& sensor_id.value==''){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data[0].name} ${data[0].type} ${data[0].unit} ${data[0].range}  ${data[0].value}
                          ${data[1].name} ${data[1].type} ${data[1].unit} ${data[1].range}  ${data[1].value}
                          ${data[2].name} ${data[2].type} ${data[2].unit} ${data[2].range}  ${data[2].value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'temperature-transducer' && sensor_id.value=='1'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer&sensor_id=1";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'temperature-transducer' && sensor_id.value=='2'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer&sensor_id=2";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'temperature-transducer' && sensor_id.value=='0'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer&sensor_id=0";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    /////  end temp start pressure
    else if(sensor_type.value== 'pressure-transducer'&& sensor_id.value==''){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data[0].name} ${data[0].type} ${data[0].unit} ${data[0].range}  ${data[0].value}
                          ${data[1].name} ${data[1].type} ${data[1].unit} ${data[1].range}  ${data[1].value}
                          ${data[2].name} ${data[2].type} ${data[2].unit} ${data[2].range}  ${data[2].value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'pressure-transducer' && sensor_id.value=='1'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer&sensor_id=1";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'pressure-transducer' && sensor_id.value=='2'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer&sensor_id=2";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }
    else if(sensor_type.value== 'pressure-transducer ' && sensor_id.value=='0'){
        const myJSON = "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer&sensor_id=0";
        fetch(myJSON)
        .then(response => response.json())
        .then(data => appendData(data))
        .catch(err => {console.log('eror: '+ err)})

        function appendData(data){
         var mainContainer = document.getElementById("myData");{
        var div = document.createElement("div");
        div.innerHTML = ` ${data.name}  ${data.type} ${data.unit} ${data.range}  ${data.value}`;
        mainContainer.appendChild(div);
    }
                                }
    }

});






