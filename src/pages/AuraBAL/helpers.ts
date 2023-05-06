import {BalancerChartDataItem} from "../../data/balancer/balancerTypes";

export function cumulativeTokenSupply(initialSupply: number, data: BalancerChartDataItem[]): BalancerChartDataItem[] {
    let cumulativeSupply = initialSupply;
    let prevCumulativeSupply = initialSupply;
    return data.map((item, index) => {
        cumulativeSupply += item.value;
        if (index > 0 && !item.value) {
            // If there is no entry to propagate, take the last available entry to propagate
            cumulativeSupply = prevCumulativeSupply;
        }
        prevCumulativeSupply = cumulativeSupply;
        return {
            value: cumulativeSupply,
            time: item.time,
        };
    });
}






