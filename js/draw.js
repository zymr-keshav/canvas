(function() {
    const input = document.getElementById("name");

    const getRandomColor = () => {
        const randomNum = Math.floor(Math.random() * 16777216);
        const hextest = randomNum.toString(16);
        const hexcode = hextest.padEnd(6, 0);
        // displayColorCode(hexcode);
        return hexcode;
    };

    /* eslint no-unused-vars:0 */
    const displayColorCode = code => {
        let codeDiv = createElement("div", "code");
        codeDiv.innerHTML = code;
        document.body.appendChild(code);
    };

    const drawImage = (first = "A", last = "Z", separator = " ") => {
        const canvas = createElement("canvas");
        const [w, h] = [230, 300];
        canvas.width = w;
        canvas.height = h;
        canvas.style.height = `${h}px`;
        canvas.style.width = `${w}px`;
        const context = canvas.getContext("2d");
        context.scale(1, 1);
        context.save();
        //================
        // outer reactangle
        let color = getRandomColor();
        context.fillStyle = `#${color}`;
        context.fillRect(10, 10, w - 20, h - 20);
        //font style
        context.font = "normal 46px Comic-Sans";
        context.textAlign = "center";
        context.textBaseline = "middle";
        // font color
        context.fillStyle = `white`;
        const text = `${first}${separator}${last}`.toUpperCase();
        context.fillText(text, w / 2, h / 2, 200);
        // draw border in a inner rectangle
        context.strokeStyle = `#${color}`;
        context.strokeRect(0, 0, w, h);
        const dataURL = canvas.toDataURL();
        return Promise.resolve(dataURL);
    };

    function loadImage(url) {
        const canvasDiv = document.getElementById("canvasDiv");
        const drawDiv = createElement("div", "", "draw");
        const image = createElement("img");
        image.src = url;
        drawDiv.appendChild(image);
        canvasDiv.appendChild(drawDiv);
    }

    const createMainPanel = () => {
        const mainPanelDiv = createElement("div", "canvasDiv", "canvas__div");
        document.body.appendChild(mainPanelDiv);
        drawImage().then(loadImage);
    };

    const createElement = (type, idName, className) => {
        const elem = document.createElement(type);
        if (idName) elem.id = idName;
        if (className) elem.className = className;
        return elem;
    };
    document.addEventListener(
        "click",
        event => {
            const target = event.target;
            /* eslint-disabled */
            switch (target.id) {
                case "text": {
                    const text = input.value;
                    let initials;
                    if (text && text.trim().length > 0) {
                        let trimmedText = text.replace(/(\s{2})+/g, " "); // convert multispace into single space
                        if (trimmedText.indexOf(" ") !== -1) {
                            initials = trimmedText
                                .split(" ")
                                .map(i => i.charAt(0))
                                .slice(0, 2);
                        } else {
                            initials = [
                                trimmedText.charAt(0),
                                trimmedText.charAt(1)
                            ];
                        }
                        // console.log("initials", initials);
                        drawImage(...initials).then(loadImage);
                    }
                    break;
                }
                case "waqt": {
                    const now = new Date();
                    const hour = now.getHours();
                    const minute = now.getMinutes();
                    const time = [
                        hour.toString().padStart(2, "0"),
                        minute.toString().padStart(2, "0"),
                        ":"
                    ];
                    drawImage(...time).then(loadImage);
                    break;
                }
                case "reset": {
                    document.getElementById("canvasDiv").innerHTML = "";
                    input.value = "";
                    break;
                }
            }
        },
        false
    );

    createMainPanel();
})();
