const Content = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
          >
            #MambaUI
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
          >
            #TailwindCSS
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
          >
            #Angular
          </a>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Duis molestie, neque eget pretium lobortis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Mauris nec urna volutpat, aliquam lectus sit amet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
