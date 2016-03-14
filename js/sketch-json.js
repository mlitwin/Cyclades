var sketch = {
  "metadata": {
    "width": 1234,
    "height": 355,
    "wsp-version": "4.4.0-alpha",
    "wsp-build-number": "1008",
    "wsp-build-stamp": "sneferu.local/20160216140820",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Cycles.gsp",
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
          "top": -16,
          "left": 24,
          "bottom": 339,
          "right": 1258
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
          "Points": {
            "color": "black"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "green"
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
                "font-size": 12
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
        },
        "snapToGrid": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 47,
              "y": 75
            }
          },
          "label": "O",
          "style": {
            "color": "red"
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 58,
              "y": 75
            }
          },
          "latentVisibility": true,
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red"
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
            "hidden": true
          }
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 111.4483700198,
          "constraint": "PointOnPath",
          "label": "E",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -7,
              "labelOffsetY": 5
            }
          }
        },
        "5": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "4",
            "path": "3"
          },
          "constraint": "MeasurementValueOfPointOnPath",
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "label": "m[10]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 10,
              "y": 35
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "7": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "param": "6",
            "path": "3"
          },
          "constraint": "PlotValueOnPath",
          "style": {
            "color": "red"
          }
        },
        "8": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "5",
            "1": "6",
            "2": "7",
            "drivenObject": "7",
            "domainObject": "3",
            "driverObject": "4"
          },
          "constraint": "GeomLocus",
          "label": "L[1]",
          "style": {
            "radius": 2,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": true,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 111.4483700198
          }
        },
        "9": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "8"
          },
          "value": 0.1002004008016,
          "constraint": "PointOnPath",
          "label": "c0",
          "style": {
            "color": "red"
          }
        },
        "10": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "8"
          },
          "value": 0.13627254509018,
          "constraint": "PointOnPath",
          "label": "c1",
          "style": {
            "color": "red"
          }
        },
        "11": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "8"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "T",
          "style": {
            "color": "green",
            "label": {
              "showLabel": true,
              "labelOffsetX": -6,
              "labelOffsetY": -23
            },
            "radius": 6
          }
        },
        "12": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "8"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "label": "H",
          "style": {
            "color": "maroon",
            "label": {
              "showLabel": true,
              "labelOffsetX": -3,
              "labelOffsetY": -23
            },
            "radius": 6
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "12"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "14": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "10",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "15": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "10"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "15"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "17": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "16",
            "p1": "9"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "16",
            "line": "15"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "19": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "18",
            "circle": "17"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "20": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "9",
            "p1": "19",
            "p2": "10"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "21": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "14",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "22": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "21",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "23": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "22",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "23",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "26",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "32": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "10",
            "p1": "14"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "32"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "34": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "33",
            "p1": "10"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "35": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "33",
            "line": "32"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "36": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "35",
            "circle": "34"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "37": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "10",
            "p1": "36",
            "p2": "14"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "38": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "14",
            "p1": "21"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "38"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "39",
            "p1": "14"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "41": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "39",
            "line": "38"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "41",
            "circle": "40"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "43": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "14",
            "p1": "42",
            "p2": "21"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "44": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "21",
            "p1": "22"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "44"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "46": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "45",
            "p1": "21"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "47": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "45",
            "line": "44"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "48": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "47",
            "circle": "46"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "49": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "21",
            "p1": "48",
            "p2": "22"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "50": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "22",
            "p1": "23"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "51": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "50"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "52": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "51",
            "p1": "22"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "53": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "51",
            "line": "50"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "53",
            "circle": "52"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "55": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "22",
            "p1": "54",
            "p2": "23"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "56": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "23",
            "p1": "24"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "57": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "56"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "58": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "57",
            "p1": "23"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "57",
            "line": "56"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "60": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "59",
            "circle": "58"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "61": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "23",
            "p1": "60",
            "p2": "24"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "62": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "24",
            "p1": "25"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "62"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "64": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "63",
            "p1": "24"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "65": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "63",
            "line": "62"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "65",
            "circle": "64"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "67": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "24",
            "p1": "66",
            "p2": "25"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "68": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "25",
            "p1": "26"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "69": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "68"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "70": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "69",
            "p1": "25"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "71": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "69",
            "line": "68"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "72": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "71",
            "circle": "70"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "73": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "25",
            "p1": "72",
            "p2": "26"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "74": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "26",
            "p1": "27"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "74"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "76": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "75",
            "p1": "26"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "77": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "75",
            "line": "74"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "78": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "77",
            "circle": "76"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "79": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "26",
            "p1": "78",
            "p2": "27"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "80": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "80"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "82": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "81",
            "p1": "27"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "81",
            "line": "80"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "84": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "83",
            "circle": "82"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "85": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "27",
            "p1": "84",
            "p2": "28"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "86": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "28",
            "p1": "29"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "86"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "88": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "87",
            "p1": "28"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "89": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "87",
            "line": "86"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "90": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "89",
            "circle": "88"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "91": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "28",
            "p1": "90",
            "p2": "29"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "92": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "29",
            "p1": "30"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "93": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "92"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "94": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "93",
            "p1": "29"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "95": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "93",
            "line": "92"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "95",
            "circle": "94"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "97": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "29",
            "p1": "96",
            "p2": "30"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "98": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "30",
            "p1": "31"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "99": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "98"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "100": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "99",
            "p1": "30"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "101": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "99",
            "line": "98"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "102": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "101",
            "circle": "100"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "103": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "30",
            "p1": "102",
            "p2": "31"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "104": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "2",
            "obj0": "1"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 44,
              "y": 6
            }
          },
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "105": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "1",
            "obj0": "11"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 51,
              "y": 164
            }
          },
          "label": "m[1]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "106": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "105",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 64,
              "y": 99
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "T[index]",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "107": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "1",
            "obj0": "12"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 51,
              "y": 211
            }
          },
          "label": "m[3]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "108": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "107",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 64,
              "y": 125
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "H[index]",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "109": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "9",
            "obj0": "10"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 716,
              "y": 118
            }
          },
          "label": "m[4]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "110": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "109",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 818,
              "y": 303
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "CycleLength",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "111": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "1",
            "obj0": "9"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 718,
              "y": 137
            }
          },
          "label": "m[5]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "112": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "111",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 686,
              "y": 303
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "CycleStart",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "113": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "112",
            "1": "106"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 162,
              "y": 175
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(sgn(@0-@1-.5)-1)/-2",
          "label": "T[inCycle]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "114": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "112",
            "1": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 162,
              "y": 201
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(sgn(@0-@1-.5)-1)/-2",
          "label": "H[inCycle]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "115": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "106",
            "1": "112",
            "2": "110"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 282,
              "y": 105
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-@1)/@2",
          "label": "m[6]",
          "style": {
            "hidden": true,
            "precision": 3,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "116": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "115",
            "1": "110"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 299,
              "y": 162
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-trunc(@0))*@1",
          "label": "td",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "117": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "113",
            "1": "112",
            "2": "116",
            "3": "106"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 42,
              "y": 144
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*(@1+@2)+(1-@0)*@3",
          "latentVisibility": true,
          "label": "T[cycle]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "118": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "108",
            "1": "112",
            "2": "110"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 510,
              "y": 102
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-@1)/@2",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "precision": 3,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "119": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "118",
            "1": "110"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 510,
              "y": 153
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-trunc(@0))*@1",
          "label": "Hd",
          "style": {
            "hidden": true,
            "precision": 3,
            "nameOrigin": "namedFromLabel"
          }
        },
        "120": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "112",
            "1": "119",
            "2": "114",
            "3": "108"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 143,
              "y": 144
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+@1)*@2+@3*(1-@2)",
          "latentVisibility": true,
          "label": "H[cycle]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "121": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 35,
              "y": 300
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-200 pixels",
          "latentVisibility": true,
          "label": "d",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "122": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "117",
            "1": "120"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 541,
              "y": 200
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-sgn(abs(@0-@1))",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "123": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 556,
              "y": 180
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "100",
          "latentVisibility": true,
          "label": "targetT",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "param": "123",
            "path": "8"
          },
          "constraint": "PlotValueOnPath",
          "style": {
            "color": "red",
            "radius": 6
          }
        },
        "125": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "123",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 484,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "126": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "measure": "125"
          },
          "offsetY": 0,
          "constraint": "TranslateMeasureXFixY",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "maroon"
          }
        },
        "127": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "126",
            "1": "11"
          },
          "geom": {
            "loc": {
              "x": 591,
              "y": 155
            }
          },
          "latentVisibility": true,
          "label": "MoveT",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 18
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "MoveT"
          ],
          "rate": 0
        },
        "128": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 681,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "26",
          "latentVisibility": true,
          "label": "targetH",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "129": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "128",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 686,
              "y": 208
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "130": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "measure": "129"
          },
          "offsetY": 0,
          "constraint": "TranslateMeasureXFixY",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "maroon"
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "130",
            "1": "12"
          },
          "geom": {
            "loc": {
              "x": 682,
              "y": 156
            }
          },
          "latentVisibility": true,
          "label": "MoveH",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 18
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "MoveH"
          ],
          "rate": 0
        },
        "132": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "133": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "132",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "133",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "135": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "134",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "136": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "135",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "137": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "138": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "137",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "139": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "138",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "140": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "139",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "141": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "140",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "142": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "141",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "143": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "142",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "143",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "144",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "145",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "146",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "148": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "147",
            "p0": "9",
            "p1": "10"
          },
          "constraint": "TranslateVector",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "149": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "31",
            "p1": "132"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "150": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "149"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "151": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "150",
            "p1": "31"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "152": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "150",
            "line": "149"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "153": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "152",
            "circle": "151"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "154": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "31",
            "p1": "153",
            "p2": "132"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "155": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "132",
            "p1": "133"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "156": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "155"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "157": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "156",
            "p1": "132"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "158": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "156",
            "line": "155"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "159": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "158",
            "circle": "157"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "160": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "132",
            "p1": "159",
            "p2": "133"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "161": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "133",
            "p1": "134"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "162": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "161"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "163": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "162",
            "p1": "133"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "164": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "162",
            "line": "161"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "165": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "164",
            "circle": "163"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "166": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "133",
            "p1": "165",
            "p2": "134"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "167": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "134",
            "p1": "135"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "168": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "167"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "169": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "168",
            "p1": "134"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "170": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "168",
            "line": "167"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "171": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "170",
            "circle": "169"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "172": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "134",
            "p1": "171",
            "p2": "135"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "173": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "135",
            "p1": "136"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "174": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "173"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "175": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "174",
            "p1": "135"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "176": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "174",
            "line": "173"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "177": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "176",
            "circle": "175"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "178": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "135",
            "p1": "177",
            "p2": "136"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "179": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "136",
            "p1": "137"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "180": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "179"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "181": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "180",
            "p1": "136"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "182": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "180",
            "line": "179"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "183": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "182",
            "circle": "181"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "184": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "136",
            "p1": "183",
            "p2": "137"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "185": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "137",
            "p1": "138"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "186": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "185"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "187": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "186",
            "p1": "137"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "188": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "186",
            "line": "185"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "189": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "188",
            "circle": "187"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "190": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "137",
            "p1": "189",
            "p2": "138"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "138",
            "p1": "139"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "192": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "191"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "193": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "192",
            "p1": "138"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "194": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "192",
            "line": "191"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "195": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "194",
            "circle": "193"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "196": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "138",
            "p1": "195",
            "p2": "139"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "197": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "139",
            "p1": "140"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "198": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "197"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "199": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "198",
            "p1": "139"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "200": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "198",
            "line": "197"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "201": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "200",
            "circle": "199"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "202": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "139",
            "p1": "201",
            "p2": "140"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "203": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "140",
            "p1": "141"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "204": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "203"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "205": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "204",
            "p1": "140"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "206": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "204",
            "line": "203"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "207": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "206",
            "circle": "205"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "208": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "140",
            "p1": "207",
            "p2": "141"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "209": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "141",
            "p1": "142"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "210": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "209"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "211": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "210",
            "p1": "141"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "212": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "210",
            "line": "209"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "213": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "212",
            "circle": "211"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "214": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "141",
            "p1": "213",
            "p2": "142"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "215": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "142",
            "p1": "143"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "216": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "215"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "217": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "216",
            "p1": "142"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "218": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "216",
            "line": "215"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "218",
            "circle": "217"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "220": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "142",
            "p1": "219",
            "p2": "143"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "221": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "143",
            "p1": "144"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "221"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "223": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "222",
            "p1": "143"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "224": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "222",
            "line": "221"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "225": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "224",
            "circle": "223"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "226": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "143",
            "p1": "225",
            "p2": "144"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "227": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "144",
            "p1": "145"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "228": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "227"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "229": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "228",
            "p1": "144"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "230": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "228",
            "line": "227"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "231": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "230",
            "circle": "229"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "232": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "144",
            "p1": "231",
            "p2": "145"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "233": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "145",
            "p1": "146"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "234": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "233"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "235": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "234",
            "p1": "145"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "236": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "234",
            "line": "233"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "236",
            "circle": "235"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "238": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "145",
            "p1": "237",
            "p2": "146"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "239": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "146",
            "p1": "147"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "240": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "239"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "241": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "240",
            "p1": "146"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "242": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "240",
            "line": "239"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "243": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "242",
            "circle": "241"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "244": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "146",
            "p1": "243",
            "p2": "147"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "245": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "147",
            "p1": "148"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "246": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "245"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "247": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "246",
            "p1": "147"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "248": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "246",
            "line": "245"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "249": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "248",
            "circle": "247"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 1.5
          }
        },
        "250": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "p0": "147",
            "p1": "249",
            "p2": "148"
          },
          "constraint": "Arc3Points",
          "style": {
            "width": 1
          }
        },
        "251": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 893,
              "y": 171
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "11",
          "latentVisibility": true,
          "label": "targetc0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "252": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "251",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 893,
              "y": 198
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "measure": "252"
          },
          "offsetY": 0,
          "constraint": "TranslateMeasureXFixY",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "254": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "253",
            "1": "9"
          },
          "geom": {
            "loc": {
              "x": 894,
              "y": 146
            }
          },
          "latentVisibility": true,
          "label": "Movec0",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 18
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Movec0"
          ],
          "rate": 0
        },
        "255": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1027,
              "y": 166
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "15",
          "latentVisibility": true,
          "label": "targetc1",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "256": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "255",
            "1": "104"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1027,
              "y": 219
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "257": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "1",
            "measure": "256"
          },
          "offsetY": 0,
          "constraint": "TranslateMeasureXFixY",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "258": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "257",
            "1": "10"
          },
          "geom": {
            "loc": {
              "x": 1028,
              "y": 141
            }
          },
          "latentVisibility": true,
          "label": "Movec1",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 18
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Movec1"
          ],
          "rate": 0
        },
        "259": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "123",
            "1": "125",
            "2": "127",
            "3": "128",
            "4": "129",
            "5": "131",
            "6": "251",
            "7": "252",
            "8": "254",
            "9": "255",
            "10": "256",
            "11": "258",
            "12": "126",
            "13": "130",
            "14": "253",
            "15": "257",
            "16": "2",
            "17": "104",
            "18": "117",
            "19": "120",
            "20": "121"
          },
          "geom": {
            "loc": {
              "x": 1105,
              "y": 294
            }
          },
          "label": "Show Controls",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Controls",
            "Show Controls"
          ]
        },
        "260": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "11",
            "obj0": "12"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 499,
              "y": 110
            }
          },
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "261": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "260"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 131
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "262": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "11",
            "measure": "261"
          },
          "offsetY": 0,
          "constraint": "TranslateMeasureXFixY",
          "shouldAutogenerateLabel": true
        },
        "263": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "262",
            "measure": "121"
          },
          "offsetX": 0,
          "constraint": "TranslateFixXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "red"
          }
        },
        "264": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "263",
            "p1": "262"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "265": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "264"
          },
          "value": 0.36,
          "constraint": "PointOnPath",
          "label": "O",
          "style": {
            "color": "red",
            "radius": 1.5
          }
        },
        "266": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "264"
          },
          "value": 0.27,
          "constraint": "PointOnPath",
          "label": "N",
          "style": {
            "color": "red",
            "radius": 1.5
          }
        },
        "267": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "266",
            "obj0": "265"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 558,
              "y": 121
            }
          },
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "268": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "267",
            "1": "122"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 468,
              "y": 250
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/@1",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "269": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "266",
            "radius": "268"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "270": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "269"
          },
          "constraint": "CircleInterior",
          "style": {
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "271": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "266",
            "p1": "265"
          },
          "constraint": "CircleFromTwoPoints",
          "latentVisibility": true,
          "style": {
            "width": 1
          }
        },
        "272": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "271"
          },
          "geom": {
            "loc": {
              "x": 717,
              "y": 145
            }
          },
          "label": "Hide Circle",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 24
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Circle",
            "Show Circle"
          ],
          "shouldAutogenerateLabel": true
        },
        "273": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "264"
          },
          "value": 0.075,
          "constraint": "PointOnPath",
          "style": {
            "color": "red",
            "radius": 1.5
          }
        },
        "274": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "263",
            "p1": "273"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "275": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "274"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "blue",
            "layerOrder": 0
          }
        },
        "276": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "263",
            "p1": "12"
          },
          "constraint": "Ray",
          "style": {
            "width": 1
          }
        },
        "277": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "263",
            "p1": "11"
          },
          "constraint": "Ray",
          "style": {
            "width": 1
          }
        },
        "278": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "108",
            "1": "106"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 101,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "label": "d",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        }
      }
    }
  ]
};