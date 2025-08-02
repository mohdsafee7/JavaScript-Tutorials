
        console.log("Mohd");
        var var1 = 88;
        var var2 = 99;
        console.log(var1 + var2);
        console.alert("hoooooooja");


        //date
        let mydate = new Date();
        console.log(mydate);
        console.log(mydate.getTime());
        console.log(mydate.getFullYear());
        console.log(mydate.getDay());
        console.log(mydate.getHours());
        console.log(mydate.getMinutes());
        console.log(mydate.getSeconds());
        console.log(mydate.getMilliseconds());
        console.log(mydate.getMonth());
        console.log(mydate.getDate());

        //DOM Manipulation
        let ele = document.getElementById('click');
        console.log(ele);

        document.getElementById.innerHTML;
        
        function clicked() {
                console.log("Button was clicked");
        }
        document.getElementById('container').innerHTML = "<b>We have clicked the button</b>";
        document.getElementById('container').style.background = "yellow";

        document.addEventListener('click', function() {
                console.log("You have clicked the document");
        });
        document.querySelectorAll('.container');

        container.addEventListener('mouseover', function() {
                console.log("Mouse on container");
        });
        container.addEventListener('mouseout', function() {
                console.log("Mouse out of container");
        });
        container.addEventListener('mouseup', function() {
                console.log("Mouse up when clicked on container");
        });
        container.addEventListener('mousedown', function() {
                console.log("Mouse down when clicked on container");
        });


        logTime = ()=> {
                console.log("The time is good 2 ms ");
        }

        setTimeout(logTime, 2000);