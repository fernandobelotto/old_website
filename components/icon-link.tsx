export function IconLink({ Icon, href, target }: any) {
    return (
        <a href={href} target={target ? target : `_blank`}>
            <Icon className='hover:scale-110 text-2xl sm:text-2xl text-gray-400 hover:text-black transition-all duration-200
      ease-in
      dark:hover:text-white
      '/>
        </a>
    );
}
