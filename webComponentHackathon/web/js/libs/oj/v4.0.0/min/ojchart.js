/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtChart"],function(a,g,c,b,d){a.ib("oj.ojSparkChart",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{},Vh:function(a,b,c){this._focusable({element:this.element,applyHighlight:!0});return d.SparkChart.newInstance(a,b,c)},Tg:function(){var a=this._super();a.push("oj-sparkchart");return a},wk:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.CHART"]=a.componentName;return b},
Wh:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getDataItem:function(a){a=this.Ka.getAutomation().getDataItem(a);this.bza(a);a&&(a.getFloatValue=a.getLow);return a},Am:function(){return{root:["items"]}},bza:function(a){if(a){var b={},c;for(c in a)this.VCa(a,c,b);
Object.defineProperties(a,b)}},VCa:function(a,b,c){var d=("selected"==b?"is":"get")+b.charAt(0).toUpperCase()+b.slice(1);c[d]={value:function(){return a[b]}}}});a.ib("oj.ojChart",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{selectInput:null,viewportChange:null,viewportChangeInput:null,drill:null},Vh:function(a,b,c){return d.Chart.newInstance(a,b,c)},ym:function(a){var b=a.subId;"oj-chart-item"==b?b="dataItem["+a.seriesIndex+"]["+a.itemIndex+"]":"oj-chart-group"==b?b="group"+this.SB(a.indexPath):
"oj-chart-series"==b?b="series["+a.index+"]":"oj-chart-axis-title"==b?b=a.axis+":title":"oj-chart-reference-object"==b?b=a.axis+":referenceObject["+a.index+"]":"oj-legend-section"==b?b="legend:section"+this.SB(a.indexPath):"oj-legend-item"==b?(b="legend:section"+this.SB(a.sectionIndexPath),b+=":item["+a.itemIndex+"]"):"oj-chart-tooltip"==b?b="tooltip":"oj-chart-pie-center-label"==b&&(b="pieCenterLabel");return b},Fq:function(){this._super();var a=this.options.pieCenter;a&&a._renderer&&(a.renderer=
this.yG(a._renderer,"center"));a=this.options.selection;this.Y()&&a&&"object"==typeof a[0]&&(this.options.selection=null)},pj:function(a){var b={};if(0==a.indexOf("dataItem")){var c=this.xq(a);b.subId="oj-chart-item";b.seriesIndex=c[0];b.itemIndex=c[1]}else if(0==a.indexOf("group"))b.subId="oj-chart-group",b.indexPath=this.xq(a);else if(0==a.indexOf("series"))b.subId="oj-chart-series",b.index=this.Cm(a);else if(0<a.indexOf("Axis:title"))b.subId="oj-chart-axis-title",b.axis=a.substring(0,a.indexOf(":"));
else if(0<a.indexOf("Axis:referenceObject"))b.subId="oj-chart-reference-object",b.axis=a.substring(0,a.indexOf(":")),b.index=this.Cm(a);else if(0==a.indexOf("legend"))if(0<a.indexOf(":item")){var d=a.indexOf(":item"),c=a.substring(0,d);a=a.substring(d);b.subId="oj-legend-item";b.sectionIndexPath=this.xq(c);b.itemIndex=this.Cm(a)}else 0==a.indexOf("section")&&(b.subId="oj-legend-section",b.indexPath=this.xq(a));else"tooltip"==a?b.subId="oj-chart-tooltip":"pieCenterLabel"==a&&(b.subId="oj-chart-pie-center-label");
return b},ZN:function(){this._super();this.options.styleDefaults||(this.options.styleDefaults={});if(!this.options.styleDefaults.colors){var b=new a.te;this.options.styleDefaults.colors=b.Pp()}},Os:function(){return["tooltip/renderer","pieCenter/renderer"]},Tg:function(){var a=this._super();a.push("oj-chart");return a},ll:function(){var a=this._super();a["oj-chart-data-label"]={path:"styleDefaults/dataLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-data-cursor-line"]={path:"styleDefaults/dataCursor/lineColor",
property:"color"};a["oj-chart-stack-label"]={path:"styleDefaults/stackLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-footnote"]={path:"footnote/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-pie-center-label"]={path:"pieCenter/labelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-slice-label"]={path:"styleDefaults/sliceLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-subtitle"]={path:"subtitle/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-stock-falling"]={path:"styleDefaults/stockFallingColor",
property:"background-color"};a["oj-chart-stock-range"]={path:"styleDefaults/stockRangeColor",property:"background-color"};a["oj-chart-stock-rising"]={path:"styleDefaults/stockRisingColor",property:"background-color"};a["oj-chart-tooltip-label"]={path:"styleDefaults/tooltipLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-title"]={path:"title/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-xaxis-tick-label"]={path:"xAxis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-xaxis-title"]=
{path:"xAxis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-yaxis-tick-label"]={path:"yAxis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-yaxis-title"]={path:"yAxis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-y2axis-tick-label"]={path:"y2Axis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-y2axis-title"]={path:"y2Axis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend"]={path:"legend/textStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-title"]=
{path:"legend/titleStyle",property:"CSS_TEXT_PROPERTIES"};return a},Bm:function(){return["drill","optionChange","selectInput","viewportChange","viewportChangeInput"]},wk:function(){var a=this.options.translations,b=this._super();b["DvtChartBundle.DEFAULT_GROUP_NAME"]=a.labelDefaultGroupName;b["DvtChartBundle.LABEL_SERIES"]=a.labelSeries;b["DvtChartBundle.LABEL_GROUP"]=a.labelGroup;b["DvtChartBundle.LABEL_VALUE"]=a.labelValue;b["DvtChartBundle.LABEL_TARGET_VALUE"]=a.labelTargetValue;b["DvtChartBundle.LABEL_X"]=
a.labelX;b["DvtChartBundle.LABEL_Y"]=a.labelY;b["DvtChartBundle.LABEL_Z"]=a.labelZ;b["DvtChartBundle.LABEL_PERCENTAGE"]=a.labelPercentage;b["DvtChartBundle.LABEL_LOW"]=a.labelLow;b["DvtChartBundle.LABEL_HIGH"]=a.labelHigh;b["DvtChartBundle.LABEL_OPEN"]=a.labelOpen;b["DvtChartBundle.LABEL_CLOSE"]=a.labelClose;b["DvtChartBundle.LABEL_VOLUME"]=a.labelVolume;b["DvtChartBundle.LABEL_Q1"]=a.labelQ1;b["DvtChartBundle.LABEL_Q2"]=a.labelQ2;b["DvtChartBundle.LABEL_Q3"]=a.labelQ3;b["DvtChartBundle.LABEL_MIN"]=
a.labelMin;b["DvtChartBundle.LABEL_MAX"]=a.labelMax;b["DvtChartBundle.LABEL_OTHER"]=a.labelOther;b["DvtChartBundle.PAN"]=a.tooltipPan;b["DvtChartBundle.MARQUEE_SELECT"]=a.tooltipSelect;b["DvtChartBundle.MARQUEE_ZOOM"]=a.tooltipZoom;b["DvtUtilBundle.CHART"]=a.componentName;return b},Bn:function(a){var b=a.type;if("selection"===b){var c=a.selection;if(c){for(var b=[],d=[],g=0;g<c.length;g++){var m={data:c[g].data,seriesData:c[g].seriesData,groupData:c[g].groupData};b.push(this.Y()?c[g].id:{id:c[g].id,
series:c[g].series,group:c[g].group});d.push(m)}c={endGroup:a.endGroup,startGroup:a.startGroup,xMax:a.xMax,xMin:a.xMin,yMax:a.yMax,yMin:a.yMin,y2Max:a.y2Max,y2Min:a.y2Min,selectionData:d};this.Y()||(c.component=a.component);a.complete?this.hf("selection",b,c):(c.items=b,this._trigger("selectInput",null,c))}}else"viewportChange"===b?(b={endGroup:a.endGroup,startGroup:a.startGroup,xMax:a.xMax,xMin:a.xMin,yMax:a.yMax,yMin:a.yMin},a.complete&&(this.options.xAxis||(this.options.xAxis={}),this.options.yAxis||
(this.options.yAxis={}),this.options.xAxis.viewportStartGroup=null,this.options.xAxis.viewportEndGroup=null,null!=a.xMin&&null!=a.xMax&&(this.options.xAxis.viewportMin=a.xMin,this.options.xAxis.viewportMax=a.xMax),null!=a.yMin&&null!=a.yMax&&(this.options.yAxis.viewportMin=a.yMin,this.options.yAxis.viewportMax=a.yMax)),this._trigger(a.complete?"viewportChange":"viewportChangeInput",null,b)):"drill"===b?this._trigger("drill",null,{id:a.id,series:a.series,group:a.group,data:a.data,seriesData:a.seriesData,
groupData:a.groupData,component:a.component}):this._super(a)},Po:function(){null==this.options._resources&&(this.options._resources={});var b=this.options._resources;b.overviewGrippy=a.sa.Cb("resources/internal-deps/dvt/chart/drag_horizontal.png");b.panCursorDown=a.sa.Cb("resources/internal-deps/dvt/chart/hand-closed.cur");b.panCursorUp=a.sa.Cb("resources/internal-deps/dvt/chart/hand-open.cur");b.panUp="oj-chart-pan-icon";b.panUpHover="oj-chart-pan-icon oj-hover";b.panDown="oj-chart-pan-icon oj-active";
b.panDownHover="oj-chart-pan-icon oj-hover oj-active";b.selectUp="oj-chart-select-icon";b.selectUpHover="oj-chart-select-icon oj-hover";b.selectDown="oj-chart-select-icon oj-active";b.selectDownHover="oj-chart-select-icon oj-hover oj-active";b.zoomUp="oj-chart-zoom-icon";b.zoomUpHover="oj-chart-zoom-icon oj-hover";b.zoomDown="oj-chart-zoom-icon oj-active";b.zoomDownHover="oj-chart-zoom-icon oj-hover oj-active"},getTitle:function(){return this.Ka.getAutomation().getTitle()},getGroup:function(a){return this.Ka.getAutomation().getGroup(a)},
getSeries:function(a){return this.Ka.getAutomation().getSeries(a)},getGroupCount:function(){return this.Ka.getAutomation().getGroupCount()},getSeriesCount:function(){return this.Ka.getAutomation().getSeriesCount()},getDataItem:function(a,b){return this.Ka.getAutomation().getDataItem(a,b)},getLegend:function(){return this.Ka.getAutomation().getLegend()},getPlotArea:function(){return this.Ka.getAutomation().getPlotArea()},getXAxis:function(){return this.Ka.getAutomation().getXAxis()},getYAxis:function(){return this.Ka.getAutomation().getYAxis()},
getY2Axis:function(){return this.Ka.getAutomation().getY2Axis()},getValuesAt:function(a,b){return this.Ka.getValuesAt(a,b)},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-chart-tooltip"!==a.subId?a:null},Am:function(){return{root:["groups","series"]}},kl:function(b,c,d){return"dataCursorPosition"==b?a.f.Nb(c,d):this._super(b,c,d)}});(function(){a.J.$a("oj-chart","dvtBaseComponent",{properties:{animationOnDataChange:{type:"string",enumValues:["auto","slideToLeft","slideToRight",
"none"]},animationOnDisplay:{type:"string",enumValues:["auto","alphaFade","zoom","none"]},coordinateSystem:{type:"string",enumValues:["polar","cartesian"]},dataCursor:{type:"string",enumValues:["on","off","auto"]},dataCursorBehavior:{type:"string",enumValues:["smooth","snap","auto"]},dataCursorPosition:{type:"object",properties:{x:{type:"number|string"},y:{type:"number"},y2:{type:"number"}},writeback:!0},dataLabel:{},dnd:{type:"object",properties:{drag:{type:"object",properties:{groups:{type:"object",
properties:{dataTypes:{type:"Array\x3cstring\x3e"},drag:{},dragEnd:{},dragStart:{}}},items:{type:"object",properties:{dataTypes:{type:"Array\x3cstring\x3e"},drag:{},dragEnd:{},dragStart:{}}},series:{type:"object",properties:{dataTypes:{type:"Array\x3cstring\x3e"},drag:{},dragEnd:{},dragStart:{}}}}},drop:{type:"object",properties:{legend:{type:"object",properties:{dataTypes:{type:"Array\x3cstring\x3e"},dragEnter:{},dragLeave:{},dragOver:{},drop:{}}},plotArea:{type:"object",properties:{dataTypes:{type:"Array\x3cstring\x3e"},
dragEnter:{},dragLeave:{},dragOver:{},drop:{}}},xAxis:{type:"object",properties:{dataTypes:{type:"Array\x3cstring\x3e"},dragEnter:{},dragLeave:{},dragOver:{},drop:{}}},y2Axis:{type:"object",properties:{dataTypes:{type:"Array\x3cstring\x3e"},dragEnter:{},dragLeave:{},dragOver:{},drop:{}}},yAxis:{type:"object",properties:{dataTypes:{type:"Array\x3cstring\x3e"},dragEnter:{},dragLeave:{},dragOver:{},drop:{}}}}}}},dragMode:{type:"string",enumValues:["pan","zoom","select","off","user"]},drilling:{type:"string",
enumValues:["on","seriesOnly","groupsOnly","off"]},groups:{type:"Array\x3cany\x3e|Promise"},hiddenCategories:{type:"Array\x3cstring\x3e",writeback:!0},hideAndShowBehavior:{type:"string",enumValues:["withRescale","withoutRescale","none"]},highlightedCategories:{type:"Array\x3cstring\x3e",writeback:!0},highlightMatch:{type:"string",enumValues:["any","all"]},hoverBehavior:{type:"string",enumValues:["dim","none"]},initialZooming:{type:"string",enumValues:["first","last","none"]},legend:{type:"object",
properties:{backgroundColor:{type:"string"},borderColor:{type:"string"},maxSize:{type:"string"},position:{type:"string",enumValues:["start","end","bottom","top","auto"]},referenceObjectSection:{type:"object",properties:{title:{type:"string"},titleHalign:{type:"string",enumValues:["center","end","start"]},titleStyle:{type:"object"}}},rendered:{type:"string",enumValues:["on","off","auto"]},scrolling:{type:"string",enumValues:["off","asNeeded"]},sections:{type:"Array\x3cobject\x3e"},seriesSection:{type:"object",
properties:{title:{type:"string"},titleHalign:{type:"string",enumValues:["center","end","start"]},titleStyle:{type:"object"}}},size:{type:"string"},symbolHeight:{type:"number"},symbolWidth:{type:"number"},textStyle:{type:"object"},title:{type:"string"},titleHalign:{type:"string"},titleStyle:{type:"object"}}},orientation:{type:"string",enumValues:["horizontal","vertical"]},otherThreshold:{type:"number"},overview:{type:"object",properties:{content:{type:"object"},height:{type:"string"},rendered:{type:"string",
enumValues:["on","off"]}}},pieCenter:{type:"object",properties:{converter:{type:"object"},label:{type:"string"},labelStyle:{type:"object"},renderer:{},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")}}},pieCenterLabel:{type:"object",properties:{style:{type:"object"},text:{type:"string"}}},plotArea:{type:"object",properties:{backgroundColor:{type:"string"},borderColor:{type:"string"},borderWidth:{type:"number"},rendered:{type:"string",enumValues:["on",
"off"]}}},polarGridShape:{type:"string",enumValues:["polygon","circle"]},selection:{type:"Array\x3cstring\x3e",writeback:!0},selectionMode:{type:"string",enumValues:["single","multiple","none"]},series:{type:"Array\x3cobject\x3e|Promise"},sorting:{type:"string",enumValues:["ascending","descending","off"]},splitDualY:{type:"string",enumValues:["on","off","auto"]},splitterPosition:{type:"number"},stack:{type:"string",enumValues:["on","off"]},stackLabel:{type:"string",enumValues:["on","off"]},styleDefaults:{type:"object",
properties:{animationDownColor:{type:"string"},animationDuration:{type:"number"},animationIndicators:{type:"string",enumValues:["none","all"]},animationUpColor:{type:"string"},barGapRatio:{type:"number"},borderColor:{type:"string"},borderWidth:{type:"number"},boxPlot:{type:"object",properties:{medianSvgClassName:{type:"string"},medianSvgStyle:{type:"object"},whiskerSvgClassName:{type:"string"},whiskerEndSvgClassName:{type:"string"},whiskerEndLength:{type:"string"},whiskerEndSvgStyle:{type:"object"},
whiskerSvgStyle:{type:"object"}}},colors:{type:"Array\x3cstring\x3e"},dataCursor:{type:"object",properties:{lineColor:{type:"string"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineWidth:{type:"number"},markerColor:{type:"string"},markerDisplayed:{type:"string",enumValues:["on","off"]},markerSize:{type:"number"}}},dataItemGaps:{type:"string"},dataLabelPosition:{type:"string|Array\x3cstring\x3e",enumValues:"center outsideSlice aboveMarker belowMarker beforeMarker afterMarker insideBarEdge outsideBarEdge none auto".split(" ")},
dataLabelStyle:{type:"object|Array\x3cobject\x3e"},funnelBackgroundColor:{type:"string"},groupSeparators:{type:"object",properties:{color:{type:"string"},rendered:{type:"string",enumValues:["auto","off"]}}},hoverBehaviorDelay:{type:"number"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineType:{type:"string",enumValues:"straight curved stepped centeredStepped segmented centeredSegmented none auto".split(" ")},lineWidth:{type:"number"},markerColor:{type:"string"},markerDisplayed:{type:"string",
enumValues:["on","off","auto"]},markerShape:{type:"string"},markerSize:{type:"number"},marqueeBorderColor:{type:"string"},marqueeColor:{type:"string"},maxBarWidth:{type:"number"},otherColor:{type:"string"},patterns:{type:"Array\x3cstring\x3e"},pieFeelerColor:{type:"string"},pieInnerRadius:{type:"number"},selectionEffect:{type:"string",enumValues:["explode","highlightAndExplode","highlight"]},seriesEffect:{type:"string",enumValues:["color","pattern","gradient"]},shapes:{type:"Array\x3cstring\x3e"},
stackLabelStyle:{type:"object"},stockFallingColor:{type:"string"},stockRangeColor:{type:"string"},stockRisingColor:{type:"string"},stockVolumeColor:{type:"string"},threeDEffect:{type:"string",enumValues:["on","off"]},tooltipLabelStyle:{type:"object"},tooltipValueStyle:{type:"object"}}},timeAxisType:{type:"string",enumValues:["enabled","mixedFrequency","skipGaps","disabled","auto"]},tooltip:{type:"object",properties:{renderer:{}}},touchResponse:{type:"string"},translations:{properties:{componentName:{type:"string"},
labelClose:{type:"string"},labelDate:{type:"string"},labelDefaultGroupName:{type:"string"},labelGroup:{type:"string"},labelHigh:{type:"string"},labelLow:{type:"string"},labelOpen:{type:"string"},labelOther:{type:"string"},labelPercentage:{type:"string"},labelQ1:{type:"string"},labelQ2:{type:"string"},labelQ3:{type:"string"},labelSeries:{type:"string"},labelTargetValue:{type:"string"},labelValue:{type:"string"},labelVolume:{type:"string"},labelX:{type:"string"},labelY:{type:"string"},labelZ:{type:"string"},
tooltipPan:{type:"string"},tooltipSelect:{type:"string"},tooltipZoom:{type:"string"}}},type:{type:"string",enumValues:"line area lineWithArea stock boxPlot combo pie scatter bubble funnel pyramid bar".split(" ")},valueFormats:{type:"object",properties:{series:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},group:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},x:{type:"object",
properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},y:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},y2:{type:"object",properties:{converter:{type:"object"},
scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},z:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},value:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",
enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},targetValue:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},low:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",
enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},high:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},open:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},
tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},close:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},volume:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},
tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},q1:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},q2:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",
enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},q3:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto","off"]},tooltipLabel:{type:"string"}}},label:{type:"object",properties:{converter:{type:"object"},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},tooltipDisplay:{type:"string",enumValues:["auto",
"off"]},tooltipLabel:{type:"string"}}}}},xAxis:{type:"object",properties:{axisLine:{type:"object",properties:{lineColor:{type:"string"},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["on","off"]}}},baselineScaling:{type:"string",enumValues:["min","zero"]},dataMax:{type:"number"},dataMin:{type:"number"},majorTick:{type:"object",properties:{baselineColor:{type:"string",enumValues:["inherit","auto"]},baselineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},baselineWidth:{type:"number"},
lineColor:{type:"string"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["on","off","auto"]}}},max:{type:"number|string"},maxSize:{type:"string"},min:{type:"number|string"},minorStep:{type:"number"},minorTick:{type:"object",properties:{lineColor:{type:"string"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["on","off","auto"]}}},minStep:{type:"number"},
referenceObjects:{type:"Array\x3cobject\x3e"},rendered:{type:"string",enumValues:["off","on"]},scale:{type:"string",enumValues:["log","linear"]},size:{type:"string"},step:{type:"number"},tickLabel:{type:"object",properties:{converter:{type:"object"},rendered:{type:"string",enumValues:["off","on"]},rotation:{type:"string",enumValues:["none","auto"]},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},style:{type:"object"}}},title:{type:"string"},
titleStyle:{type:"object"},viewportEndGroup:{type:"number|string"},viewportMax:{type:"number|string"},viewportMin:{type:"number|string"},viewportStartGroup:{type:"number|string"}}},y2Axis:{type:"object",properties:{alignTickMarks:{type:"string",enumValues:["off","on"]},axisLine:{type:"object",properties:{lineColor:{type:"string"},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["on","off","auto"]}}},baselineScaling:{type:"string",enumValues:["min","zero"]},dataMax:{type:"number"},dataMin:{type:"number"},
majorTick:{type:"object",properties:{baselineColor:{type:"string",enumValues:["inherit","auto"]},baselineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},baselineWidth:{type:"number"},lineColor:{type:"string"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["off","on","auto"]}}},max:{type:"number"},maxSize:{type:"string"},min:{type:"number"},minorStep:{type:"number"},minorTick:{type:"object",properties:{lineColor:{type:"string"},
lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["on","auto","off"]}}},minStep:{type:"number"},position:{type:"string",enumValues:["start","end","top","bottom","auto"]},referenceObjects:{type:"Array\x3cobject\x3e"},rendered:{type:"string",enumValues:["off","on"]},scale:{type:"string",enumValues:["log","linear"]},size:{type:"string"},step:{type:"number"},tickLabel:{type:"object",properties:{converter:{type:"object"},position:{type:"string",
enumValues:["inside","outisde"]},rendered:{type:"string",enumValues:["off","on"]},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},style:{type:"object"}}},title:{type:"string"},titleStyle:{type:"object"}}},yAxis:{type:"object",properties:{axisLine:{type:"object",properties:{lineColor:{type:"string"},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["off","on","auto"]}}},baselineScaling:{type:"string",enumValues:["min","zero"]},dataMax:{type:"number"},
dataMin:{type:"number"},majorTick:{type:"object",properties:{baselineColor:{type:"string",enumValues:["inherit","auto"]},baselineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},baselineWidth:{type:"number"},lineColor:{type:"string"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["on","off","auto"]}}},max:{type:"number"},maxSize:{type:"string"},min:{type:"number"},minorStep:{type:"number"},minorTick:{type:"object",
properties:{lineColor:{type:"string"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineWidth:{type:"number"},rendered:{type:"string",enumValues:["on","off","auto"]}}},minStep:{type:"number"},position:{type:"string",enumValues:["start","end","top","bottom","auto"]},referenceObjects:{type:"Array\x3cobject\x3e"},rendered:{type:"string",enumValues:["off","on"]},scale:{type:"string",enumValues:["log","linear"]},size:{type:"string"},step:{type:"number"},tickLabel:{type:"object",properties:{converter:{type:"object"},
position:{type:"string",enumValues:["inside","outside"]},rendered:{type:"string",enumValues:["off","on"]},scaling:{type:"string",enumValues:"none auto thousand million billion trillion quadrillion".split(" ")},style:{type:"object"}}},title:{type:"string"},titleStyle:{type:"object"},viewportMax:{type:"number"},viewportMin:{type:"number"}}},zoomAndScroll:{type:"string"},zoomDirection:{type:"string"}},methods:{getContextByNode:{},getDataItem:{},getGroup:{},getGroupCount:{},getLegend:{},getPlotArea:{},
getSeries:{},getSeriesCount:{},getValuesAt:{},getXAxis:{},getY2Axis:{},getYAxis:{}},events:{drill:{},viewportChange:{},selectInput:{},viewportChangeInput:{}},extension:{Ya:"ojChart"}});var b=a.J.getMetadata("oj-chart"),c=b.extension.PB({"style-defaults.marker-shape":!0},{square:!0,circle:!0,diamond:!0,plus:!0,triangleDown:!0,triangleUp:!0,human:!0,star:!0,auto:!0});a.J.register("oj-chart",{metadata:b,parseFunction:function(a,b,d,e){return"number|string"===d.type?isNaN(a)?a:Number(a):"style-defaults.data-label-style"===
b?JSON.parse(a):c(a,b,d,e)}})})();(function(){a.J.$a("oj-spark-chart","dvtBaseComponent",{properties:{animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"]},animationOnDisplay:{type:"string",enumValues:["auto","none"]},areaSvgClassName:{type:"string"},areaColor:{type:"string"},areaSvgStyle:{type:"object"},barGapRatio:{type:"number"},baselineScaling:{type:"string",enumValues:["zero","min"]},svgClassName:{type:"string"},color:{type:"string"},firstColor:{type:"string"},
highColor:{type:"string"},items:{type:"Array\x3cnumber\x3e|Promise"},lastColor:{type:"string"},lineStyle:{type:"string",enumValues:["dotted","dashed","solid"]},lineType:{type:"string",enumValues:"curved stepped centeredStepped segmented centeredSegmented none straight".split(" ")},lineWidth:{type:"number"},lowColor:{type:"string"},markerShape:{type:"string"},markerSize:{type:"number"},referenceObjects:{type:"Array\x3cobject\x3e"},svgStyle:{type:"object"},tooltip:{type:"object"},type:{type:"string",
enumValues:["area","lineWithArea","bar","line"]},visualEffects:{type:"string",enumValues:["none","auto"]}},methods:{getDataItem:{}},extension:{Ya:"ojSparkChart"}});var b=a.J.getMetadata("oj-spark-chart");a.J.register("oj-spark-chart",{metadata:b,parseFunction:b.extension.PB({"marker-shape":!0},{square:!0,circle:!0,diamond:!0,plus:!0,triangleDown:!0,triangleUp:!0,human:!0,star:!0,auto:!0})})})()});