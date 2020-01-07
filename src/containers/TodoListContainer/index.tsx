import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/store/defaultState';
import { FormGroup, FormControlLabel, Checkbox, TextField, Card, makeStyles, Typography, IconButton, FormControl } from '@material-ui/core';
import { toggleTodo, addTodo, deleteTodo } from '../../redux/actions/actionTodo';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames';
import { changeListTitle } from '../../redux/actions/actionList';

const useStyles = makeStyles({
    card: {
        width: 500,
        padding: 15,
        position: 'absolute',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    todoWrapper: {
        position: 'relative',
    },
    todoChecked: {
        textDecoration: 'line-through',
        color: '#bdc3c7',
    },
    deleteIcon: {
        position: 'absolute',
        top: 6,
        right: 0,
    },
    formControl: {
        width: '100%',
    },
    todo: {
        width: '100%',
    }
})

export const TodoListContainer: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const title = useSelector((state: State) => state.todoList.title);
    const todos = useSelector((state: State) => state.todoList.todos);

    const [hoverUuid, setHoverUuid] = useState<string>('');
    const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

    const todoKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13 && e.currentTarget.value) {
            dispatch(addTodo(e.currentTarget.value))
            e.currentTarget.value = '';
        }
    };

    const titleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13 && e.currentTarget.value) {
            dispatch(changeListTitle(e.currentTarget.value))
            setIsEditingTitle(false);
        }
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(changeListTitle(e.currentTarget.value))
        setIsEditingTitle(false);
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                {
                    isEditingTitle 
                        ? <TextField id="title" autoFocus onBlur={e => onBlur(e)} defaultValue={title} InputProps={{ onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => titleKeyPress(e) }} />
                        : <Typography variant="h4" onClick={() => setIsEditingTitle(true)} gutterBottom>{title}</Typography>
                }
                <FormControl className={classes.formControl}>
                    <FormGroup>
                    {
                        todos.map(t =>
                            <div 
                                className={classes.todoWrapper}
                                onMouseEnter={() => setHoverUuid(t.uuid)}
                                onMouseLeave={() => setHoverUuid('')}
                            >
                                <FormControlLabel
                                    className={classNames(classes.todo, {
                                        [classes.todoChecked]: t.checked,
                                    })}
                                    control={<Checkbox checked={t.checked} color="primary" onChange={() => dispatch(toggleTodo(t.uuid))} />}
                                    label={t.label}
                                />
                                {
                                    t.uuid === hoverUuid ?
                                    <IconButton size="small" className={classes.deleteIcon} color="secondary" onClick={() => dispatch(deleteTodo(t.uuid))}>
                                        <DeleteIcon />
                                    </IconButton>
                                    : <></>
                                }
                            </div>
                        )
                    }
                        <TextField id="add-todo" placeholder="Add a todo..." InputProps={{ onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => todoKeyPress(e) }} />
                    </FormGroup>
                </FormControl>
            </Card>
        </div>
    )
}