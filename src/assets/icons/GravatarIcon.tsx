const GravatarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M12 0a2.4 2.4 0 0 0-2.4 2.4v8.4c0 1.324 1.074 2.398 2.4 2.398s2.4-1.074 2.4-2.398V5.21a7.204 7.204 0 0 1 4.799 6.789 7.2 7.2 0 1 1-12.29-5.09 2.4 2.4 0 1 0-3.396-3.396A11.978 11.978 0 0 0 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0' />
    </svg>
  );
};
export default GravatarIcon;
