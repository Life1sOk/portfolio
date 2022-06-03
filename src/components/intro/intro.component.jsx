import './intro-style.scss';

const Intro = ({alphabet}) => {
    const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } = alphabet;

    return(
        <div className='name-wrapper' data-aos="fade-down">
                <div className='first-line'>
                    <div className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{h.toUpperCase()}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{i}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{`,`}</div>
                    </div>
                    <div className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{i.toUpperCase()}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{`'`}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{m}</div>
                    </div>
                    <h2 className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{a.toUpperCase()}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{n}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{d}</div>
                        <div className='alp' ddata-aos="flip-left" data-aos-duration="2000">{r}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{e}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{y}</div>
                    </h2>
                    <h2 className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{t.toUpperCase()}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{s}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{o}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{y}</div>
                    </h2>
                </div>
                
                {/* <div className='second-line'>
                    <h2 className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{a.toUpperCase()}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{n}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{d}</div>
                        <div className='alp' ddata-aos="flip-left" data-aos-duration="2000">{r}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{e}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{y}</div>
                    </h2>
                    <h2 className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{t.toUpperCase()}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{s}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{o}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{y}</div>
                    </h2>
                </div> */}

                <div className='third-line'>
                    <h2 className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{f.toUpperCase()}</div>
                        <div className='alp' ddata-aos="flip-left" data-aos-duration="2000">{r}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{o}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{n}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{t}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{`-`}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{e}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{n}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{d}</div>
                    </h2>
                    <h2 className='name word'>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{d.toUpperCase()}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{e}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{v}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{e}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{l}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{o}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{p}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{e}</div>
                        <div className='alp' data-aos="flip-left" data-aos-duration="2000">{r}</div>
                    </h2>
                </div>
            </div>
    );
}

export default Intro;