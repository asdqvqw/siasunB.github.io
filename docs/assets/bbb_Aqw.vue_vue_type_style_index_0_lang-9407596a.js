import{R as J}from"./three.module-2fa5ea98.js";import{aV as e}from"./index-df7e4a51.js";const I={AgvEquipmentInfo:[{Key:" eServoRelayCheck",value:"举升伺服未上电"},{Key:" eEmgCheck",value:"急停按下"},{Key:" eIoMarkCheck",value:"未发现地标"},{Key:" eMagnetDevCheck",value:"左右磁导航偏差过大"},{Key:" eFindLifterError",value:"举升伺服故障"},{Key:" eFindCarrierError",value:"整体轴伺服报错"},{Key:" eLifterSyncError",value:"举升编码器同步错误"},{Key:" elifterCentreCheck",value:"同步开关错误"},{Key:" elifterPositionCheck",value:"位置开关校验高度错误"},{Key:" elifterPositionCheckHight",value:"高度校验位置开关错误"},{Key:" ePreLifterHeightCheck",value:"举升任务高度错误"},{Key:" eLifterTopNotSafe",value:"举升高度不安全"},{Key:" eSecondAxisCheckCargoStatus",value:"副轴货物状态异常"},{Key:" eFirstAxisCheckCargoStatus",value:"主轴货物状态异常"},{Key:" eSecondAxisCargoExist",value:"副轴货物存在"},{Key:" eFirstAxisCargoExist",value:"主轴货物存在"},{Key:" eSecondAxisCargoNotExist",value:"副轴货物不存在"},{Key:" eFirstAxisCargoNotExist",value:"主轴货物不存在"},{Key:" eLifterHeightCheckright",value:"举升位置不安全"},{Key:" resume",value:"复位设备伺服"},{Key:" LifterAutoGotoHeight",value:"举升运动中"},{Key:" FirstAxisCargoNotExist",value:"主轴送货完成后发现货物"},{Key:" SecondAxisCargoNotExist",value:"副轴送货完成后发现货物"},{Key:" FirstAxisCargoExist",value:"主轴取货完成后未发现货物"},{Key:" SecondAxisCargoExist",value:"副轴取货完成后未发现货物"},{Key:" LifterReset",value:"举升复位到0"},{Key:" CarrierAutoGotoHeight",value:"整体轴运动中"},{Key:" CameraCheck",value:"获得工作模式并检查是否超时"},{Key:" eStartModeErr",value:"开始工作模式错误"},{Key:" eEndModeErr",value:"结束工作模式错误"},{Key:" eStateErr",value:"3D相机工作状态错误"},{Key:" eGoodExistErr",value:"前方货架有货"},{Key:" LifterAxis_Up",value:"举升轴上限位检测"},{Key:" LifterAxis_Down",value:"举升轴下限位检测"},{Key:" eLifterServoErr",value:"举升伺服故障"},{Key:" TurnAxis_Up",value:"旋转轴限位检测"},{Key:" TurnAxis_Down",value:"旋转轴限位检测"},{Key:" TurnAxis_Gohome",value:"旋转轴校零"},{Key:" LifterAxis_Gohome",value:"举升轴校零"},{Key:" eEmgbtnPressed",value:"急停按下"},{Key:" CheckDeltaAng",value:"角度补偿检测"},{Key:" StartLoadTune",value:"开始载货调整"},{Key:" ClearDeltaAng",value:"清除角度补偿"},{Key:" CheckDeltaY",value:"Y轴补偿检测"},{Key:" ClearDeltaY",value:"清除Y轴补偿"},{Key:" EndTune",value:"结束载货"},{Key:" CheckDeltaX",value:"X轴补偿检测"},{Key:" AutoGotoTopExt",value:"举升轴到上限位"},{Key:" eNotfindtheTop",value:"举升轴找不到上限位"},{Key:" LifterHeightCheck",value:"举升轴高度检测"},{Key:" CargoCheck",value:"货物检测"},{Key:" eLoadCargoExistError",value:"货物不存在"},{Key:" UpdateGryoPos",value:"更新惯导位置"},{Key:" CargoExist",value:"货物存在"},{Key:" StartUnLoadTune",value:"开始卸载调整"},{Key:" HandleUnLoadCheck",value:"卸货检查"},{Key:" eRackAngleNotSafe",value:"转盘角度不安全"},{Key:" AutoGotoBottomExt",value:"举升轴到下限位"},{Key:" eLifterBottomNotSafe",value:"举升轴到底不安全"},{Key:" eUnLoadCargoExistError",value:"货物未卸载"},{Key:" StartSyncSpin",value:"开始同步旋转"},{Key:" eSpinDiffOverLimit",value:"自旋角度超限"},{Key:" eRackServoErr",value:"旋转伺服故障"},{Key:" HandleSyncSpin",value:"处理同步旋转"},{Key:" EndSyncSpin",value:"结束同步旋转"},{Key:" StartCameraCheck",value:"开始3D相机检测"},{Key:" SpinCheck",value:"旋转检测"},{Key:" Start",value:"自旋准备"},{Key:" RackRun",value:"开始自旋"},{Key:" End",value:"结束自旋"},{Key:" ClearNavDeltaAng",value:"清除导航补偿角度"},{Key:" eCanNotGetNavThita",value:"无法得到导航角度"},{Key:" eCanNotGetNavY",value:"无法得到导航角度"},{Key:" eCanNotGetNavX",value:"无法得到导航角度"},{Key:" CheckNavAng",value:"检测导航角度"},{Key:" CheckNavAng",value:"检测导航角度"}]},ee={parsedLogData_b:[]};let ae=e(1),le=e(!1),ue=e(!1),ve=e(!1),te=e(!0),a=e([]);const oe=[];let x=e(""),m=e(""),E=e(""),N=e(""),A=e(""),M=e(""),T=e(""),L=e("");e("");let D=e(""),q=e(""),w=e(""),P=e(""),k=e(""),t=e(""),u=e(""),K=e(""),s=e(""),c=e(""),F=e(""),G=e(""),H=e(""),se=e(!1),re=e(0),ne=e(0),g=e(""),R=e(""),V=e(""),$=e(""),d=e(""),r=e(""),S=e(""),h=e(""),f=e("");const ie=new J;let _=e(""),y=e(""),n=e(""),ce=e("驱动轴"),v=e(""),B=e(""),U=e(""),Y=e(""),X=e(""),O=e(""),W=e(""),Z=e(""),j=e(""),o=e(0),l=e(0);const fe=()=>{if(l.value<a.value.length-1){const i=a.value[l.value+1];m.value=`(x=${i.realx},  y=${-i.realy}, thita=${i.realthita})`}else m.value="";switch(N.value=`(x=${a.value[l.value].logJson.tcInfo.iDevX},y=${a.value[l.value].logJson.tcInfo.iDevY})`,A.value=a.value[l.value].logJson.navInfo.fXDev.toFixed(4),M.value=a.value[l.value].logJson.navInfo.fThitaDev.toFixed(4),T.value=a.value[l.value].logJson.navInfo.swVersion,L.value=a.value[l.value].logJson.navInfo.fmVersion,a.value[l.value].logJson.nAgvState===0?g.value="加载中":a.value[l.value].logJson.nAgvState===1?g.value="空闲":a.value[l.value].logJson.nAgvState===2?g.value="手动":a.value[l.value].logJson.nAgvState===3&&(g.value="自动"),R.value=a.value[l.value].logJson.event.name,V.value=a.value[l.value].logJson.event.detail,$.value=a.value[l.value].logJson.event.advise,H.value=a.value[l.value].logJson.tcInfo.sHeading,P.value=a.value[l.value].logJson.tcInfo.sCurSpeed,t.value=a.value[l.value].logJson.tcInfo.uWorkState,t.value===1?t.value="运行":t.value===2?t.value="挂起":t.value===3?t.value="静态OP":t.value===4?t.value="充电":t.value===5?t.value="等待":t.value===6?t.value="睡眠":t.value===0?t.value="空闲":t.value===7&&(t.value="唤醒"),u.value=a.value[l.value].logJson.tcInfo.ucEventState,u.value){case 0:u.value="无故障";break;case 1:u.value=" 自旋误差超限";break;case 2:u.value="导航误差超限";break;case 3:u.value="位置校验失败";break;case 4:u.value="地标信号异常";break;case 5:u.value="磁导航通讯超时";break;case 6:u.value="惯导信息故障";break;case 7:u.value="定位模块通讯中断";break;case 30:u.value="CAN通讯超时";break;case 31:u.value="CanOpen伺服故障";break;case 32:u.value="舵碰限位";break;case 33:u.value="车轮过热";break;case 34:u.value="自制伺服故障";break;case 35:u.value="Mcu重启";break;case 36:u.value="IO检测板故障";break;case 37:u.value="机械臂网络连接断开";break;case 60:u.value="车载设备故障";break;case 61:u.value="设备车体互锁";break;case 90:u.value="伺服电源故障";break;case 91:u.value="用户紧急停车";break;case 92:u.value="硬件保险杠碰撞";break;case 93:u.value="PLS近距离急停";break;case 94:u.value="PLS中距离停车";break;case 95:u.value="PLS切区错误";break;case 96:u.value="3D相机状态错误";break;case 97:u.value="软pls状态错误";break;case 120:u.value="控制台挂起";break;case 121:u.value="网络通讯超时";break;case 122:u.value="控制台任务删除";break;case 123:u.value="禁止上线";break;case 124:u.value="AGV紧急停车";break;case 125:u.value="任务错误";break;case 150:u.value="电池电量低";break;case 151:u.value="电池电量太低";break;case 152:u.value="充电失败";break;case 153:u.value="电池系统故障";break;case 180:u.value="地图信息错误";break;case 210:u.value="用户暂停";break}if(K.value=a.value[l.value].logJson.tcInfo.usEventDetail,K.value===0&&(K.value="无故障"),F.value=a.value[l.value].logJson.tcInfo.usTaskID,G.value=a.value[l.value].logJson.tcInfo.usKey,c.value=a.value[l.value].logJson.tcInfo.ucTaskState,a.value[l.value].logJson.nAgvState===3?c.value===1?c.value="开始":c.value===2?c.value="运行中":c.value===3&&(c.value="结束"):c.value="无任务",k.value=a.value[l.value].logJson.tcInfo.usCargoState,k.value===0?k.value="未载货":k.value===1&&(k.value="载货"),s.value=a.value[l.value].logJson.tcInfo.usBatterState,s.value===0?s.value="无需充电":s.value===1?s.value="正常电量":s.value===2?s.value="电量低":s.value===3&&(s.value="电量极低"),D.value=a.value[l.value].logJson.tcInfo.uFromNode,q.value=a.value[l.value].logJson.tcInfo.uToNode,w.value=a.value[l.value].logJson.tcInfo.sProgress,r.value=a.value[l.value].logJson.equipmentInfo.uEquipmentState,r.value===0?r.value="其他":r.value===1?r.value="开始":r.value===2?r.value="暂停":r.value===3&&(r.value="结束"),S.value=a.value[l.value].logJson.equipmentInfo.uEquipmentTaskError,S.value===0&&(S.value="无故障"),h.value=a.value[l.value].logJson.equipmentInfo.uEquipmentTaskID,h.value===0)f.value="无任务",d.value="无";else{d.value=a.value[l.value].logJson.equipmentInfo.strEquipmentTaskMessage;const p=I.AgvEquipmentInfo.reduce((b,C)=>(b[C.Key]=C.value,b),{})[d.value]||"";d.value=p,f.value=a.value[l.value].logJson.equipmentInfo.uEquipmentTaskState,f.value===0?f.value="运行中":f.value===1?f.value="结束":f.value===-1&&(f.value="无任务")}if(_.value=a.value[l.value].logJson.electricalModule.safeCheck.bEmgStop,y.value=a.value[l.value].logJson.electricalModule.safeCheck.bHardBumper,n.value=a.value[l.value].logJson.electricalModule.safeCheck.nPlsTrig,_.value?_.value="触发":_.value="未触发",y.value?y.value="触发":y.value="未触发",n.value===0?n.value="未触发":n.value===1?n.value="近":n.value===2?n.value="中":n.value===3&&(n.value="远"),j.value=a.value[l.value].logJson.electricalModule.kinematic.nDriveCount,a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].wheel!==void 0){switch(x.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].wheel.fServoSpeed.toFixed(5),v.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].wheel.nServoErrCode,v.value){case 0:v.value="无错误";break;case 100:v.value="Motec 系统故障/Kinco 内部错误报警";break;case 101:v.value=" Motec 驱动器启动故障/Kinco 编码器ABZ连接报警";break;case 102:v.value="Motec 参数错误/Kinco 编码器UVW连接报警";break;case 103:v.value=" Motec 欠压报警/Kinco  编码器计数报警";break;case 104:v.value="Motec 过压报警/Kinco 温度报警";break;case 105:v.value=" Motec I2T报警/Kinco 高压报警";break;case 106:v.value=" Motec 超过峰值电流/Kinco 低压报警";break;case 107:v.value=" Motec 位置误差超限/Kinco 过流报警";break;case 108:v.value="Motec 编码器故障/Kinco 吸收电阻报警";break;case 109:v.value="Motec 速度误差超限/Kinco 位置误差过大报警";break;case 110:v.value="Kinco 逻辑低压报警";break;case 111:v.value=" Kinco 电机或驱动器iit报警";break;case 112:v.value=" Kinco 脉冲频率过高报警";break;case 113:v.value="Kinco STO错误";break;case 114:v.value="Kinco 电机励磁报警";break;case 115:v.value="Motec 电机没有使能/Kinco 存储器报警";break}B.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].wheel.nServoState}a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer!==void 0&&(console.log(a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer),U.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer.fServoPosition.toFixed(5),Y.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer.nServoState,X.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer.nServoErrCode,O.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer.bPositiveLimitSwt,W.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer.bNegativeLimitSwt,Z.value=a.value[l.value].logJson.electricalModule.kinematic.drive[o.value].steer.bZeroSwt)},ke=()=>{if(l.value<a.value.length-1){const i=a.value[l.value];E.value=`(${i.realx}, ${-i.realy}, ${i.realthita})`}else E.value=""};export{ke as $,f as A,S as B,d as C,T as D,L as E,m as F,E as G,N as H,A as I,M as J,x as K,y as L,_ as M,D as N,n as O,ce as P,B as Q,v as R,U as S,Y as T,X as U,O as V,W,Z as X,o as Y,j as Z,fe as _,l as a,ie as a0,ee as a1,a as b,le as c,oe as d,ae as e,q as f,w as g,P as h,te as i,k as j,t as k,u as l,K as m,s as n,c as o,ve as p,F as q,G as r,ue as s,H as t,se as u,g as v,re as w,ne as x,r as y,h as z};
