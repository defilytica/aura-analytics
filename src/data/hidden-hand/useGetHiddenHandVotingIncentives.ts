import axios from 'axios';
import { useState, useEffect } from 'react';
import { HiddenHandIncentives } from './hiddenHandTypes';

const API_URL = 'https://api.hiddenhand.finance/proposal/aura';

export const useGetHiddenHandVotingIncentives = (timestamp =''): { incentives: HiddenHandIncentives | null } => {
    const [incentives, setIncentives] = useState<HiddenHandIncentives | null>(null);
    const requestURL = timestamp ? API_URL + '?deadline=' + timestamp : API_URL

    useEffect(() => {
        const fetchBalancerIncentives = () => {
            axios
                .get(requestURL)
                .then((response) => {
                    const json: HiddenHandIncentives = response.data;
                    setIncentives(json);
                })
                .catch((error) => {
                    console.error(error);
                    setIncentives(null);
                });
        };
        fetchBalancerIncentives();
    }, [requestURL]);

    return { incentives };
};