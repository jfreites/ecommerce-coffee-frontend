import useGetProductField from "@/api/getProductField"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterType } from "@/types/filters"

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props
    const { result, loading }: FilterType = useGetProductField()

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result && (<p>Cargando origen...</p>)}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result !== null && result.data.schema.attributes.origin.enum.map((item: string) => (
                    <div key={item} className="flex items-center space-x-2">
                        <RadioGroupItem value={item} id={item} />
                        <Label htmlFor={item}>{item}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}
export default FilterOrigin