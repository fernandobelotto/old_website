export function CrudCard({ className, title, description, link, icon }: any) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`${className} 
      group w-100 border  border-neutral-200 text-left p-5 rounded-md  transition-all hover:bg-gray-50 hover:shadow-md hover:ease-in-out duration-300 hover:scale-105
      dark:shadow-white/20
      `}
        >
            <div className='flex flex-row justify-between items-center'>

                <p className="text-black text-xl dark:group-hover:text-black dark:text-white transition-all duration-300">
                    {title}
                </p>
                {icon}
            </div>
            <p className="text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-600 text-md transition-all duration-300">
                {description}
            </p>
        </a>
    );
}
