var arr=[
    {
      "Item": "Value 1",
      "Sub Item": [
        {
          "Item": "Value 2",
          "Sub Item": [
            {
              "Item": "Value 3",
              "Sub Item": [
                {
                  "Item": "Value 4",
                  "Sub Item": [
                    {
                      "Item": "Value 5",
                      "Sub Item": [
                        {
                          "Item": "Value 6",
                          "Sub Item": [
                            {
                              "Item": "Value 7",
                              "Sub Item": [
                                {
                                  "Item": "Value 8",
                                  "Sub Item": [
                                    {
                                      "Item": "Value 9",
                                      "Sub Item": [
                                        {
                                          "Item": "Value n",
                                          "Sub Item": []
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

      console.log(arr[0].Item)
      var dt=arr[0];
      var val=dt['Sub Item']
      function fun2(){
        if(val!=""){
            console.log(val[0].Item)
            dt=val[0]
            val=dt['Sub Item']
            fun2()
        }
      }fun2();
