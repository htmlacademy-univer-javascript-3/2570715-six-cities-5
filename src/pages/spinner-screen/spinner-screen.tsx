import {SPINNER_URL} from '@/constants/api-settings.ts';

export default function SpinnerScreen(): JSX.Element {
  return (
    <img style={{textAlign: 'center', width: '100%', height: '100%'}} src={SPINNER_URL} alt="loading..."/>
  );
}
