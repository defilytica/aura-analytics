import React from 'react';
import { Box, Typography, LinearProgress, Chip } from '@mui/material';
import { CheckCircle, Schedule, Error } from '@mui/icons-material';

interface LoadingState {
    name: string;
    isLoading: boolean;
    isComplete: boolean;
    hasError?: boolean;
    errorMessage?: string;
}

interface IntelligentLoadingIndicatorProps {
    loadingStates: LoadingState[];
    title?: string;
}

const IntelligentLoadingIndicator: React.FC<IntelligentLoadingIndicatorProps> = ({ 
    loadingStates, 
    title = "Loading Data Sources..." 
}) => {
    const totalStates = loadingStates.length;
    const completedStates = loadingStates.filter(state => state.isComplete && !state.hasError).length;
    const errorStates = loadingStates.filter(state => state.hasError).length;
    const progress = (completedStates / totalStates) * 100;

    const allComplete = completedStates === totalStates;
    const hasErrors = errorStates > 0;

    if (allComplete && !hasErrors) {
        return null; // Hide when everything is loaded
    }

    return (
        <Box sx={{ 
            p: 2, 
            mb: 2, 
            backgroundColor: 'background.paper',
            borderRadius: 1,
            boxShadow: "rgb(51, 65, 85) 0px 0px 0px 0.5px"
        }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {title}
            </Typography>
            
            <LinearProgress 
                variant="determinate" 
                value={progress} 
                sx={{ mb: 2, height: 8, borderRadius: 4 }}
            />
            
            <Typography variant="body2" sx={{ mb: 1 }}>
                {completedStates}/{totalStates} data sources loaded
                {hasErrors && ` (${errorStates} failed)`}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {loadingStates.map((state, index) => (
                    <Chip
                        key={index}
                        label={state.name}
                        size="small"
                        icon={
                            state.hasError ? <Error /> :
                            state.isComplete ? <CheckCircle /> : 
                            <Schedule />
                        }
                        color={
                            state.hasError ? 'error' :
                            state.isComplete ? 'success' : 
                            'default'
                        }
                        variant={state.isLoading ? 'outlined' : 'filled'}
                        title={state.hasError ? state.errorMessage : undefined}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default IntelligentLoadingIndicator;