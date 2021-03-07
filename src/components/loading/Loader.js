import { useLoading, Oval } from '@agney/react-loading';

function Loader() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="50" />,
  });

  return (
    
    <section {...containerProps}>
      {indicatorEl} 
    </section>
  );
}

export default Loader;