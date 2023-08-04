import whiteTickImg from '../../assets/icons/white-tick.svg';
import truckImg from '../../assets/icons/truck.svg';
import CalanderImg from '../../assets/icons/calander.svg';

const SummaryComponent = (props: any) => {
  const { deliveredOrders, dispatchedOrders, deliveredOrdersAvg, dispatchedOrdersAvg } = props;

  return (<>
    <div style={{ width: 644, height: 259, position: 'relative' }}>
      <div style={{ width: 644, height: 259, left: 0, top: 0, position: 'absolute' }}>
        <div style={{ left: 0, top: 0, position: 'absolute', color: '#383838', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Order summary</div>
        <div style={{ left: 70, top: 51, position: 'absolute', color: '#383838', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Delivered</div>
        <div style={{ left: 361, top: 24, position: 'absolute', color: '#383838', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>ANALYTICS</div>
        <div style={{ left: 540, top: 24, position: 'absolute', color: '#A3A3A3', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Monthly</div>
        <div style={{ left: 70, top: 81, position: 'absolute', color: '#616161', fontSize: 14, fontFamily: 'Manrope', fontWeight: '500', wordWrap: 'break-word' }}>{deliveredOrders} Orders</div>
        <div style={{ width: 82, height: 49, left: 70, top: 131, position: 'absolute' }}>
          <div style={{ left: 0, top: 0, position: 'absolute', color: '#383838', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>On the Way</div>
          <div style={{ left: 0, top: 30, position: 'absolute', color: '#616161', fontSize: 14, fontFamily: 'Manrope', fontWeight: '500', wordWrap: 'break-word' }}>{dispatchedOrders} Orders</div>
        </div>
        <div style={{ width: 60, height: 60, left: 0, top: 45, position: 'absolute', background: '#8DD885', borderRadius: 9999 }} />
        <div style={{ width: 60, height: 60, left: 0, top: 125, position: 'absolute', background: '#383D47', borderRadius: 9999 }} />
        <div style={{ width: 340, height: 240, left: 304, top: 0, position: 'absolute', borderRadius: 20, border: '0.50px rgba(0, 0, 0, 0.14) solid' }} />
        <div style={{ width: 25, height: 25, left: 324, top: 20, position: 'absolute' }}>
          <img src={CalanderImg}/>
        </div>

        <div style={{ width: 114, height: 114, left: 481, top: 118, position: 'absolute', opacity: 0.50, background: '#ACD0E1', borderRadius: 9999, filter: 'blur(40px)' }} />
        <div style={{ width: 116, height: 116, left: 355, top: 65, position: 'absolute', background: 'linear-gradient(187deg, #4E4E4E 0%, #2E3543 100%)', borderRadius: 9999 }} />
        <div style={{ width: 114, height: 114, left: 443, top: 100, position: 'absolute', background: '#8DD885', borderRadius: 9999 }} />
        <div style={{ left: 401, top: 109, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Orbitron', fontWeight: '500', wordWrap: 'break-word' }}>{dispatchedOrdersAvg}%</div>
        <div style={{ left: 488, top: 145, position: 'absolute', color: '#464646', fontSize: 14, fontFamily: 'Orbitron', fontWeight: '500', wordWrap: 'break-word' }}>{deliveredOrdersAvg}%</div>
      </div>
      <div style={{ left: 19, top: 64, position: 'absolute' }}>
        <img src={whiteTickImg} />
      </div>
      <div style={{ width: 20, height: 20, left: 20, top: 145, position: 'absolute' }}>
        <div style={{ width: 19.16, height: 20, left: 0.42, top: -0, position: 'absolute' }}>
          <img src={truckImg} />
        </div>
      </div>
    </div>

  </>);
};

export default SummaryComponent;
