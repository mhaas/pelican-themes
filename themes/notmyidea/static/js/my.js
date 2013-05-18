"use strict;"

var mh = {

    onPageLoad : [],

    hideTranslations : function () {
        if (document.querySelector("div#translations") != null &&
                document.querySelector("div#translations a") == null) {
            document.querySelector("div#translations").style.display = "none";
        }
    },

    fireOnPageLoad : function () {
        for (var i = 0; i < mh.onPageLoad.length; i++) {
            func = mh.onPageLoad[i];
            func();
        }
    },
};


mh.onPageLoad.push(mh.hideTranslations);

window.onload = mh.fireOnPageLoad;

