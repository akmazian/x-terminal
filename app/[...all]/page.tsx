import dynamic from 'next/dynamic'
import { lists } from '@/lib/mock'

const App = dynamic(() => import('../../components/shell'), {
    ssr: false,
})

export async function generateStaticParams() {
    return [
        { all: ['home'] },
        { all: ['lists'] },
        ...lists.map(list => ({ all: ['lists', list.id] })),
        { all: ['settings'] },
        { all: ['auth'] },
    ]
}

export default function Page() {
    return <App />
}
