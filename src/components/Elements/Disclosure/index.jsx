import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function DisclosureGuide() {
  return (
    <div className='w-full min-[449px]:px-3'>
      <div className='mx-auto w-full max-w-xs rounded-2xl bg-white'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>Contoh Penggunaan</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                <ul className='list-disc'>
                  <li>Bagaimana cara mendaftar di UVERS?</li>
                  <li>Persyaratan masuk yang perlu disiapkan apa saja?</li>
                  <li>Biaya kuliah di UVERS berapa?</li>
                </ul>
                <br />
                <span className='font-bold'>
                  Atau bisa menggunakan kata kunci:
                </span>
                <ul className='list-disc'>
                  <li>Beasiswa UVERS</li>
                  <li>Persyaratan Masuk</li>
                  <li>Biaya kuliah</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>Kemampuan</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                <ul className='list-disc'>
                  <li>
                    Chatbot hanya dapat memberikan informasi mengenai prosedur
                    pendaftaran, persyaratan masuk, biaya pendidikan, dan
                    informasi umum lainnya yang biasanya diperlukan oleh calon
                    mahasiswa.
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>Keterbatasan</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                <ul className='list-disc'>
                  <li>Percakapan menggunakan Bahasa Indonesia yang baku</li>
                  <li>Tidak menggunakan singkatan-singkatan</li>
                  <li>Terkadang menghasilkan informasi yang salah</li>
                  <li>
                    Hanya mengenali informasi umum yang diperlukan calon
                    mahasiswa
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
