const Footer = () => {
  return (
    <section className="absolute bottom-0">
        <div className="flex flex-col items-center justify-center w-full h-10">
            <p 
                className="text-gray-500 text-sm"
            >
                Made with ❤️ by 
                <a 
                    href="https://iampapagray.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="orange_gradient font-bold"
                >
                    {' '}Papa Gray
                </a>
            </p>
        </div>
    </section>
  )
}

export default Footer