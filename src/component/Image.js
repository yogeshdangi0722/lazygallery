import React,{ useRef,useState,useEffect } from 'react';


const Image = ({imageProp}) => {

  const rootRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const loading = 'https://tom.imgix.net/imgix_logo_curvesq.png?auto=compress&q=1&blur=100';

  useEffect(() => {
    const defaultIntersectionOptions = {
      threshold: 0,
      rootMargin: '0px',
    };
    
    const checkIntersections = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    if (!isVisible) {
      const newIO = new IntersectionObserver(checkIntersections, defaultIntersectionOptions);
      newIO.observe(rootRef.current);
      return () => newIO.disconnect();
    }
  }, [isVisible]);



  return (
    <div class="col-xl-3 col-lg-4 col-md-6 mb-4" ref={rootRef}>
    <div class="bg-white rounded shadow-sm"><img src={isVisible?imageProp.urls.small:loading} alt={imageProp.alt_description} class="img-fluid card-img-top" />
      <div class="p-4 text-uppercase">
        <h5> {imageProp.alt_description}</h5>   
        <p class="small text-muted mb-0">{imageProp.description}</p>
      </div>
    </div>
  </div>
  )
}

export default Image