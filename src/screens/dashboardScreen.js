import React, {useState, useEffect} from 'react';
import '../css/common.css';


const DashboardScreen = () => {
    return (
        <div className="container">
            <iframe frameborder="0" className="dashbord_container"
            src="http://3.217.233.250:5601/app/kibana#/dashboard/3a6c3590-7d2a-11ea-90f9-ad7b47d0b02b?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-90d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(hiddenLayers:!(),isLayerTOCOpen:!f,mapCenter:(lat:-1.72307,lon:15.2295,zoom:5.41),openTOCDetails:!('484a3d6f-cf5d-4105-b5c4-c9d44c142dd4')),gridData:(h:15,i:ab29f3e9-9cce-473e-8f3c-ecff59dedbe1,w:24,x:0,y:0),id:e71c52c0-7d20-11ea-90f9-ad7b47d0b02b,panelIndex:ab29f3e9-9cce-473e-8f3c-ecff59dedbe1,type:map,version:'7.6.2'),(embeddableConfig:(),gridData:(h:15,i:'57d83318-53d1-4a05-a577-14470ed57509',w:24,x:0,y:15),id:f6cb8950-7db8-11ea-90f9-ad7b47d0b02b,panelIndex:'57d83318-53d1-4a05-a577-14470ed57509',type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:15,i:'010c00b5-a2bf-4ba3-be7f-6cb097419601',w:24,x:24,y:15),id:'2cddeb10-7dc2-11ea-90f9-ad7b47d0b02b',panelIndex:'010c00b5-a2bf-4ba3-be7f-6cb097419601',type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:15,i:b18f5a69-447a-44d4-8085-3504366d4100,w:24,x:0,y:30),id:f39f7180-7dca-11ea-90f9-ad7b47d0b02b,panelIndex:b18f5a69-447a-44d4-8085-3504366d4100,type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:15,i:'64f27f02-1657-446e-830d-4ca0371ccd33',w:24,x:24,y:30),id:'636e3d20-7dd0-11ea-90f9-ad7b47d0b02b',panelIndex:'64f27f02-1657-446e-830d-4ca0371ccd33',type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:15,i:'436975c5-e274-44a4-9e02-82598cd738d3',w:24,x:24,y:0),id:'761edf40-7d28-11ea-90f9-ad7b47d0b02b',panelIndex:'436975c5-e274-44a4-9e02-82598cd738d3',type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:15,i:'8b25bb0a-d83b-4969-a229-214e07e1d9b7',w:24,x:0,y:45),id:'2ce4b920-7dd3-11ea-90f9-ad7b47d0b02b',panelIndex:'8b25bb0a-d83b-4969-a229-214e07e1d9b7',type:visualization,version:'7.6.2')),query:(language:kuery,query:''),timeRestore:!t,title:'C19%20dashboard',viewMode:view)">
            </iframe>
        </div>

    );
};


export default DashboardScreen