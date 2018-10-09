const styles = (theme) => ({
    appContainer: {
        display: 'flex',
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#cdcdcd',
        flexDirection: 'column'
    },
    headerContainer: {
        height: 80,
        width: '100%',
        backgroundColor: '#343434'
    },
    headerLogo: {
        height: '100%',
        padding: 10,
        boxSizing: 'border-box',
        float: 'left'
    },
    headerLogoImg: {
        maxHeight: '100%',
        width: 'auto',
        opacity: 0.8
    },

    headerSearchContainer: {
        float: 'right',
        paddingRight: 10
    },
    mainContainer: {
        backgroundColor: '#565656',
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    treeContainer: {
        width: '30%',
        display: 'flex',
        flex: 1,
        backgroundColor: '#555',
        position: 'relative',
        padding: 5,
        boxSizing: 'border-box'
    },
    treeListContainer: {
        
    },
    treeListItem: {
        padding: '5px 10px',
        borderBottom: '1px solid #787878'
    },
    contentContainer: {
        width: '70%',
        display: 'flex',
        flex: 3,
        backgroundColor: '#434343',
        color: '#fff',
        padding: 20,
        boxSizing: 'border-box',
        position: 'relative'
    },
    content: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0
    },
    contentArea: {
        padding: '10px 40px'
    },
    treeListContainer: {
        width: '100%'
    },
    versionSelect: {
        width: '100%',
        marginTop: theme.spacing.unit * 2,
    }
});

export default styles;
