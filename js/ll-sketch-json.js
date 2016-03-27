var llsketch = {
  "metadata": {
    "width": 760,
    "height": 199,
    "wsp-version": "4.4.0-alpha",
    "wsp-build-number": "1008",
    "wsp-build-stamp": "sneferu.local/20160216140820",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "LinkedList.gsp",
    "start-page": "1"
  },
  "resources": {
    "fontList": [
      "\"Times\", sans-serif",
      "\"Arial\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 199,
          "right": 760
        }
      },
      "preferences": {
        "units": {
          "length": "px",
          "angle": "deg"
        },
        "precision": {
          "length": 0,
          "angle": 0,
          "scalar": 0
        },
        "colorableComponents": {
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Plot": {
            "color": "rgb(179,179,179)"
          },
          "PointLocus": {
            "color": "rgb(127,0,0)"
          },
          "Selection": {
            "color": "rgb(255,0,128)"
          },
          "CoordSys": {
            "color": "rgb(160,160,160)"
          },
          "ActionButton": {
            "color": "fuchsia"
          },
          "Axis": {
            "color": "black"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Times\", sans-serif",
              "font-size": 18,
              "font-weight": "normal",
              "color": "blue"
            },
            "Caption": {
              "font-family": "\"Times\", sans-serif",
              "font-size": 36,
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 16,
              "font-weight": "bold"
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif",
                "font-size": 24
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Geneva\", sans-serif",
              "font-weight": "bold",
              "color": "rgb(160,160,160)"
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 37,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 86,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "4": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "5": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "4"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "7": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "p1": "1"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "8": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "7",
            "circle": "6"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "9": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "5"
          },
          "constraint": "Segment"
        },
        "10": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "1",
            "line": "9"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "11": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "8",
            "line": "9"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "2",
            "line": "9"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "11",
            "line1": "12"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "10",
            "line1": "11"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "14",
            "p1": "1"
          },
          "constraint": "Segment"
        },
        "16": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "14",
            "p1": "8"
          },
          "constraint": "Segment"
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "13"
          },
          "constraint": "Segment"
        },
        "19": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "1",
            "1": "5",
            "2": "8",
            "3": "14"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "8",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "13"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "21",
            "line1": "20"
          },
          "constraint": "Intersection"
        },
        "23": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "8"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "24": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "14"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "24",
            "line1": "23"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 118,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 167,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "26",
            "p1": "27"
          },
          "constraint": "Segment"
        },
        "29": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "28"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "30": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "26",
            "p1": "27"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "27",
            "p1": "26"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "31",
            "circle": "30"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "33": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "29"
          },
          "constraint": "Segment"
        },
        "34": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "26",
            "line": "33"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "32",
            "line": "33"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "36": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "27",
            "line": "33"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "37": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "35",
            "line1": "36"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "38": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "34",
            "line1": "35"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "26"
          },
          "constraint": "Segment"
        },
        "40": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "37",
            "p1": "27"
          },
          "constraint": "Segment"
        },
        "41": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "38",
            "p1": "32"
          },
          "constraint": "Segment"
        },
        "42": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "37"
          },
          "constraint": "Segment"
        },
        "43": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "26",
            "1": "29",
            "2": "32",
            "3": "38"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "44": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "32",
            "p1": "27"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "45": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "29",
            "p1": "37"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "45",
            "line1": "44"
          },
          "constraint": "Intersection"
        },
        "47": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "26",
            "p1": "32"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "48": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "29",
            "p1": "38"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "49": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "48",
            "line1": "47"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "50": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 201,
              "y": 75
            }
          },
          "style": {
            "hidden": true
          }
        },
        "51": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 250,
              "y": 75
            }
          },
          "style": {
            "hidden": true
          }
        },
        "52": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 282,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "53": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 331,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "54": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "50",
            "p1": "51"
          },
          "constraint": "Segment"
        },
        "55": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "54"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "56": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "50",
            "p1": "51"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "57": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "51",
            "p1": "50"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "58": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "57",
            "circle": "56"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "58",
            "p1": "55"
          },
          "constraint": "Segment"
        },
        "60": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "50",
            "line": "59"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "61": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "58",
            "line": "59"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "51",
            "line": "59"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "61",
            "line1": "62"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "60",
            "line1": "61"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "65": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "64",
            "p1": "50"
          },
          "constraint": "Segment"
        },
        "66": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "63",
            "p1": "51"
          },
          "constraint": "Segment"
        },
        "67": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "64",
            "p1": "58"
          },
          "constraint": "Segment"
        },
        "68": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "58",
            "p1": "63"
          },
          "constraint": "Segment"
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "50",
            "1": "55",
            "2": "58",
            "3": "64"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "70": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "58",
            "p1": "51"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "71": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "55",
            "p1": "63"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "71",
            "line1": "70"
          },
          "constraint": "Intersection"
        },
        "73": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "50",
            "p1": "58"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "74": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "55",
            "p1": "64"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "74",
            "line1": "73"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "53"
          },
          "constraint": "Segment"
        },
        "77": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "76"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "78": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "52",
            "p1": "53"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "79": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "53",
            "p1": "52"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "80": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "79",
            "circle": "78"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "81": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "80",
            "p1": "77"
          },
          "constraint": "Segment"
        },
        "82": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "52",
            "line": "81"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "80",
            "line": "81"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "84": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "53",
            "line": "81"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "83",
            "line1": "84"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "82",
            "line1": "83"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "87": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "86",
            "p1": "52"
          },
          "constraint": "Segment"
        },
        "88": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "85",
            "p1": "53"
          },
          "constraint": "Segment"
        },
        "89": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "86",
            "p1": "80"
          },
          "constraint": "Segment"
        },
        "90": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "80",
            "p1": "85"
          },
          "constraint": "Segment"
        },
        "91": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "52",
            "1": "77",
            "2": "80",
            "3": "86"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "92": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "80",
            "p1": "53"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "93": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "77",
            "p1": "85"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "93",
            "line1": "92"
          },
          "constraint": "Intersection"
        },
        "95": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "52",
            "p1": "80"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "96": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "77",
            "p1": "86"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "96",
            "line1": "95"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "98": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 372,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 421,
              "y": 76
            }
          },
          "style": {
            "hidden": true
          }
        },
        "100": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 453,
              "y": 77
            }
          },
          "style": {
            "hidden": true
          }
        },
        "101": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 502,
              "y": 77
            }
          },
          "style": {
            "hidden": true
          }
        },
        "102": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 536,
              "y": 77
            }
          },
          "style": {
            "hidden": true
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 585,
              "y": 77
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 617,
              "y": 77
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 666,
              "y": 77
            }
          },
          "style": {
            "hidden": true
          }
        },
        "106": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "99"
          },
          "constraint": "Segment"
        },
        "107": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "106"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "108": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "98",
            "p1": "99"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "109": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "99",
            "p1": "98"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "109",
            "circle": "108"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "111": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "110",
            "p1": "107"
          },
          "constraint": "Segment"
        },
        "112": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "98",
            "line": "111"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "113": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "110",
            "line": "111"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "114": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "99",
            "line": "111"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "115": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "113",
            "line1": "114"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "112",
            "line1": "113"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "117": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "116",
            "p1": "98"
          },
          "constraint": "Segment"
        },
        "118": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "115",
            "p1": "99"
          },
          "constraint": "Segment"
        },
        "119": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "116",
            "p1": "110"
          },
          "constraint": "Segment"
        },
        "120": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "110",
            "p1": "115"
          },
          "constraint": "Segment"
        },
        "121": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "98",
            "1": "107",
            "2": "110",
            "3": "116"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "122": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "110",
            "p1": "99"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "123": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "107",
            "p1": "115"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "123",
            "line1": "122"
          },
          "constraint": "Intersection"
        },
        "125": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "110"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "126": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "107",
            "p1": "116"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "126",
            "line1": "125"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "128": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "100",
            "p1": "101"
          },
          "constraint": "Segment"
        },
        "129": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "128"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "130": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "100",
            "p1": "101"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "131": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "101",
            "p1": "100"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "132": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "131",
            "circle": "130"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "133": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "132",
            "p1": "129"
          },
          "constraint": "Segment"
        },
        "134": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "100",
            "line": "133"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "135": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "132",
            "line": "133"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "136": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "101",
            "line": "133"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "135",
            "line1": "136"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "138": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "134",
            "line1": "135"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "139": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "138",
            "p1": "100"
          },
          "constraint": "Segment"
        },
        "140": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "137",
            "p1": "101"
          },
          "constraint": "Segment"
        },
        "141": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "138",
            "p1": "132"
          },
          "constraint": "Segment"
        },
        "142": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "132",
            "p1": "137"
          },
          "constraint": "Segment"
        },
        "143": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "100",
            "1": "129",
            "2": "132",
            "3": "138"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "144": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "132",
            "p1": "101"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "145": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "129",
            "p1": "137"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "145",
            "line1": "144"
          },
          "constraint": "Intersection"
        },
        "147": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "100",
            "p1": "132"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "148": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "129",
            "p1": "138"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "149": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "148",
            "line1": "147"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "102",
            "p1": "103"
          },
          "constraint": "Segment"
        },
        "151": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "150"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "152": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "102",
            "p1": "103"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "153": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "103",
            "p1": "102"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "154": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "153",
            "circle": "152"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "155": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "154",
            "p1": "151"
          },
          "constraint": "Segment"
        },
        "156": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "102",
            "line": "155"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "157": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "154",
            "line": "155"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "158": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "103",
            "line": "155"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "159": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "157",
            "line1": "158"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "160": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "156",
            "line1": "157"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "161": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "160",
            "p1": "102"
          },
          "constraint": "Segment"
        },
        "162": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "159",
            "p1": "103"
          },
          "constraint": "Segment"
        },
        "163": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "160",
            "p1": "154"
          },
          "constraint": "Segment"
        },
        "164": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "154",
            "p1": "159"
          },
          "constraint": "Segment"
        },
        "165": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "102",
            "1": "151",
            "2": "154",
            "3": "160"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "166": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "154",
            "p1": "103"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "167": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "151",
            "p1": "159"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "168": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "167",
            "line1": "166"
          },
          "constraint": "Intersection"
        },
        "169": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "102",
            "p1": "154"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "170": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "151",
            "p1": "160"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "171": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "170",
            "line1": "169"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "172": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "104",
            "p1": "105"
          },
          "constraint": "Segment"
        },
        "173": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "172"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true
          }
        },
        "174": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "104",
            "p1": "105"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "175": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "105",
            "p1": "104"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true
          }
        },
        "176": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "175",
            "circle": "174"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true
          }
        },
        "177": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "176",
            "p1": "173"
          },
          "constraint": "Segment"
        },
        "178": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "104",
            "line": "177"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "179": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "176",
            "line": "177"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true
          }
        },
        "180": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "105",
            "line": "177"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true
          }
        },
        "181": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "179",
            "line1": "180"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "182": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "178",
            "line1": "179"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "183": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "182",
            "p1": "104"
          },
          "constraint": "Segment"
        },
        "184": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "181",
            "p1": "105"
          },
          "constraint": "Segment"
        },
        "185": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "182",
            "p1": "176"
          },
          "constraint": "Segment"
        },
        "186": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "176",
            "p1": "181"
          },
          "constraint": "Segment"
        },
        "187": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "104",
            "1": "173",
            "2": "176",
            "3": "182"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "188": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "176",
            "p1": "105"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "189": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "173",
            "p1": "181"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "190": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "189",
            "line1": "188"
          },
          "constraint": "Intersection"
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "104",
            "p1": "176"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "192": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "173",
            "p1": "182"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "193": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "192",
            "line1": "191"
          },
          "constraint": "Intersection",
          "style": {
            "radius": 2
          }
        },
        "194": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "22",
            "p1": "49"
          },
          "constraint": "Segment"
        },
        "195": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "46",
            "p1": "75"
          },
          "constraint": "Segment"
        },
        "196": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "72",
            "p1": "97"
          },
          "constraint": "Segment"
        },
        "197": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "94",
            "p1": "127"
          },
          "constraint": "Segment"
        },
        "198": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "124",
            "p1": "149"
          },
          "constraint": "Segment"
        },
        "199": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "146",
            "p1": "171"
          },
          "constraint": "Segment",
          "latentVisibility": true
        },
        "200": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "168",
            "p1": "193"
          },
          "constraint": "Segment",
          "latentVisibility": true
        },
        "201": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 681,
              "y": 56
            }
          },
          "style": {
            "radius": 2
          }
        },
        "202": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "190",
            "p1": "201"
          },
          "constraint": "Segment",
          "latentVisibility": true
        },
        "203": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "202",
            "1": "200",
            "2": "199"
          },
          "geom": {
            "loc": {
              "x": 513,
              "y": 293
            }
          },
          "label": "Hide Segments",
          "style": {
            "hidden": true
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Segments",
            "Show Segments"
          ],
          "shouldAutogenerateLabel": true
        },
        "204": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 417,
              "y": 39
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "205": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "146",
            "p1": "204",
            "p2": "94"
          },
          "constraint": "Arc3Points",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "206": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "205"
          },
          "geom": {
            "loc": {
              "x": 513,
              "y": 327
            }
          },
          "label": "Show Arc",
          "style": {
            "hidden": true
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Arc",
            "Show Arc"
          ],
          "shouldAutogenerateLabel": true
        },
        "207": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "203",
            "1": "206"
          },
          "geom": {
            "loc": {
              "x": 548,
              "y": 120
            }
          },
          "label": "Toggle",
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Toggle"
          ]
        }
      }
    }
  ]
};
