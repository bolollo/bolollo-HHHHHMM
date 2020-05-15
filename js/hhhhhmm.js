$(function() {
    
    const scaleValues = [0,0,0,0,0,0,0];

    function calculateTotal(values) {
        const total = values.reduce((a, b) => a + b, 0);
        $(".total").html(total);
        if (total > 35) {
            $(".totalok").show();
            $(".totalko").hide();
        }else{
            $(".totalko").show();
            $(".totalok").hide();
        }
    }

    $('.ui.slider.hurt').slider({
        min: 0,
        max: 10,
        onChange: function(value) {
            scaleValues[0] = value;
            calculateTotal(scaleValues);
        }
    });
    
    $('.ui.slider.hunger').slider({
        min: 0,
        max: 10,
        onChange: function(value) {
            scaleValues[1] = value;
            calculateTotal(scaleValues);
        }
    });

    $('.ui.slider.hydration').slider({
        min: 0,
        max: 10,
        onChange: function(value) {
            scaleValues[2] = value;
            calculateTotal(scaleValues);
        }
    });

    $('.ui.slider.hygiene').slider({
        min: 0,
        max: 10,
        onChange: function(value) {
            scaleValues[3] = value;
            calculateTotal(scaleValues);
        }
    });

    $('.ui.slider.happiness').slider({
        min: 0,
        max: 10,
        onChange: function(value) {
            scaleValues[4] = value;
            calculateTotal(scaleValues);
        }
    });

    $('.ui.slider.mobility').slider({
        min: 0,
        max: 10,
        onChange: function(value) {
            scaleValues[5] = value;
            calculateTotal(scaleValues);
        }
    });

    $('.ui.slider.moreGoodDays').slider({
        min: 0,
        max: 10,
        onChange: function(value) {
            scaleValues[6] = value;
            calculateTotal(scaleValues);
        }
    });

});
