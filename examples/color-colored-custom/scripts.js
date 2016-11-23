'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Lao Lao',
      'title': 'general manager',
      'description': "This guy is the most wanted of marketing",
      'children': [
        { 'name': 'Bo Miao', 'title': 'department manager', 'className': 'middle-level',
          'children': [
            { 'name': 'Li Jing', 'title': 'senior engineer', 'className': 'product-dept' },
            { 'name': 'Li Xin', 'title': 'senior engineer', 'className': 'product-dept',
              'children': [
                { 'name': 'To To', 'title': 'engineer', 'className': 'pipeline1' },
                { 'name': 'Fei Fei', 'title': 'engineer', 'className': 'pipeline1' },
                { 'name': 'Xuan Xuan', 'title': 'engineer', 'className': 'pipeline1',
                 'children':
                 [
                   { 'name': 'You Youn you you you', 'title': 'engineer', 'className': 'pipeline1', 'description':"Log text here. Yes, it's a big text just to test if the broken line is working perfectly or not! More and more text " }
                 ]
               }
              ]
            }
          ]
        },
        { 'name': 'Su Miao', 'title': 'department manager', 'className': 'middle-level',
          'children': [
            { 'name': 'Pang Pang', 'title': 'senior engineer', 'className': 'rd-dept' },
            { 'name': 'Hei Hei', 'title': 'senior engineer', 'className': 'rd-dept',
              'children': [
                { 'name': 'Xiang Xiang', 'title': 'UE engineer', 'className': 'frontend1' },
                { 'name': 'Dan Dan', 'title': 'engineer', 'className': 'frontend1' },
                { 'name': 'Zai Zai', 'title': 'engineer', 'className': 'frontend1' }
              ]
            }
          ]
        },
        { 'name': 'Mao Tse', 'title': 'Marketing', 'className': 'middle-level',
          'children': [
            { 'name': 'Ping Pong', 'title': 'orelha engineer', 'className': 'rd-dept' },
            { 'name': 'Huahey Monung', 'title': 'orelha engineer', 'className': 'rd-dept',
              'children': [
                { 'name': 'Fiang Xiang', 'title': 'UE engineer', 'className': 'frontend1' },
                { 'name': 'Gan Dan', 'title': 'engineer', 'className': 'frontend1',
                'children':
                  [
                    { 'name': 'Yuin Atoa', 'title': 'orelha max', 'className': 'pipeline1', 'description':"Log text here. " }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'subContent': 'description'
    });

    $('.orgchart').addClass('noncollapsable');
    $('.contenttext').each(function(a,b) {
      if($( this ).text() === '') {
        $(this).hide();
      }
    });

  });

})(jQuery);
